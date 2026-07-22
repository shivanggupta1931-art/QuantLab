

document.addEventListener("DOMContentLoaded", async () => {
    initChart();

    const data = await loadMarketData("data/HitBTC_BTCUSD_d.csv");
    startReplay(data);

    document.getElementById("nextCandleBtn").addEventListener("click", nextCandle);
    document.querySelector(".buy-btn").addEventListener("click", buy);
    document.querySelector(".sell-btn").addEventListener("click", sell);
    document.querySelector(".close-btn").addEventListener("click", closeTrade);

    // Keyboard shortcut
    document.addEventListener("keydown", function (event) {
        if (event.repeat) return;

        const tag = event.target.tagName;

        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
            return;
        }

        if (event.key === "ArrowRight") {
            nextCandle();
        }
    });
});