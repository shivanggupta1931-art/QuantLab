

// document.addEventListener("DOMContentLoaded", async () => {
//     initChart();

//     // const data = await loadMarketData("data/btc/HitBTC_BTCUSD_d.csv");
//     // let currentMarket = markets.btc;

//     // replay.allData = await loadMarketData(currentMarket.file);
//     // startReplay(data);

// //     let currentMarket = markets.btc;

// // const data = await loadMarketData(currentMarket.file);

// // replay.allData = data;

// // startReplay(data);


// await loadSelectedMarket("btc");

// const marketSelect = document.getElementById("marketSelect");

// marketSelect.addEventListener("change", async function () {

//     await loadSelectedMarket(this.value);

// });






//     document.getElementById("nextCandleBtn").addEventListener("click", nextCandle);
//     document.querySelector(".buy-btn").addEventListener("click", buy);
//     document.querySelector(".sell-btn").addEventListener("click", sell);
//     document.querySelector(".close-btn").addEventListener("click", closeTrade);

//     // Keyboard shortcut
//     document.addEventListener("keydown", function (event) {
//         if (event.repeat) return;

//         const tag = event.target.tagName;

//         if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
//             return;
//         }

//         if (event.key === "ArrowRight") {
//             nextCandle();
//         }
//     });
// });


// // async function loadSelectedMarket(marketKey){

// //     const market = markets[marketKey];

// //     replay.allData = await loadMarketData(market.file);

// //     startReplay(replay.allData);

// // }


// async function loadSelectedMarket(marketKey) {

//     const market = markets[marketKey];

//     resetSession();
//     resetAccount();
//     clearTradeHistory();
//     resetEquity();
//     resetTrade();

//     replay.allData = await loadMarketData(market.file);

//     startReplay(replay.allData);

// }



















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

}