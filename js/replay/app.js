let currentMarket=null;

const marketStates={};



function saveCurrentState() {
    if (!currentMarket) return;

    marketStates[currentMarket] = {

        replay: structuredClone(replay),

        trade: structuredClone(trade),
        session: structuredClone(session),
        account: structuredClone(account),

        tradeHistory: structuredClone(tradeHistory),
        equityData: structuredClone(equityData)

    };

}




function restoreState(state) {

    Object.assign(trade, state.trade);
    Object.assign(session, state.session);
    Object.assign(account, state.account);

    Object.assign(replay, state.replay);

    tradeHistory.length = 0;
    tradeHistory.push(...state.tradeHistory);

    equityData.length = 0;
    equityData.push(...state.equityData);


    // Restore chart
    candleSeries.setData(replay.visibleData);

    updateReplayPriceLine();
    moveCamera();

    renderTradeHistory();
    updateSummaryCard();
    function updateAccountUI() {
    document.getElementById("accountBalance").textContent =
        "$" + account.balance.toFixed(2);
}
   if (typeof updateEquityChart === "function") {
    updateEquityChart();
}

}

document.addEventListener("DOMContentLoaded", async () => {

    initChart();

    // Load default market
    await loadSelectedMarket("btc");

    // Market selector
    const marketSelect = document.getElementById("marketSelect");

    if (marketSelect) {
        marketSelect.addEventListener("change", async function () {
            await loadSelectedMarket(this.value);
        });
    }

    // Buttons
    document.getElementById("nextCandleBtn").addEventListener("click", nextCandle);
    document.querySelector(".buy-btn").addEventListener("click", buy);
    document.querySelector(".sell-btn").addEventListener("click", sell);
    document.querySelector(".close-btn").addEventListener("click", closeTrade);

    // Keyboard shortcut
    document.addEventListener("keydown", function (event) {

        if (event.repeat) return;

        const tag = event.target.tagName;

        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "SELECT"
        ) {
            return;
        }

        if (event.key === "ArrowRight") {
            nextCandle();
        }

    });

});

async function loadSelectedMarket(marketKey) {

    // Save previous market
    saveCurrentState();

    currentMarket = marketKey;

    // Already played before?
    if (marketStates[marketKey]) {

        restoreState(marketStates[marketKey]);
        return;
    }

    const market = markets[marketKey];

    if (!market) {
        console.error("Market not found:", marketKey);
        return;
    }

    resetAccount();
    resetSession();
    clearTradeHistory();
    resetEquity();
    resetTrade();

    replay.allData = await loadMarketData(market.file);

    startReplay(replay.allData);

    // Save initial state
   saveCurrentState();
}