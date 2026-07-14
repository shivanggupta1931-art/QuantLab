


document.addEventListener("DOMContentLoaded",async()=>{
        console.log("Before initChart");
        initChart();
        console.log("after chartinit")
        const data=await loadMarketData("data/HitBTC_BTCUSD_d.csv");
        startReplay(data);
        document.getElementById("nextCandleBtn").addEventListener("click",nextCandle);
        document.querySelector(".buy-btn").addEventListener("click",buy);
        document.querySelector(".sell-btn").addEventListener("click",sell);

document.querySelector(".close-btn").addEventListener("click",closeTrade)
});

