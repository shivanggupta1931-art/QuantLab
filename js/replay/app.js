


// const chartContainer = document.getElementById("chart-container");

// // =======================
// // CREATE CHART
// // =======================

// const chart = LightweightCharts.createChart(chartContainer, {
//     width: chartContainer.clientWidth,
//     height: chartContainer.clientHeight,
    

//     layout: {
//         background: {
//             color: "#111827"
//         },
//         textColor: "#D1D5DB"
//     },

//     grid: {
//         vertLines: {
//             color: "#1F2937"
//         },
//         horzLines: {
//             color: "#1F2937"
//         }
//     },

//     crosshair: {
//         mode: LightweightCharts.CrosshairMode.Normal
//     },

//     rightPriceScale: {
//         borderColor: "#374151"
//     },

//     timeScale: {
//         borderColor: "#374151"
//     },

//     handleScroll: {
//     mouseWheel: false,
//     pressedMouseMove: false,
//     horzTouchDrag: false,
//     vertTouchDrag: false
// },

// handleScale: {
//     mouseWheel: false,
//     pinch: false,
//     axisPressedMouseMove: false
// },

// });

// // =======================
// // CANDLE SERIES
// // =======================

// const candleSeries = chart.addSeries(
//     LightweightCharts.CandlestickSeries
// );

// // =======================
// // VARIABLES
// // =======================

// let marketData = [];
// // let currentIndex = 100;
// const START_CANDLES = 100;
// let currentIndex = START_CANDLES;

// const nextBtn = document.getElementById("nextCandleBtn");


// // CANTS SEE FUTURE

// // function updateReplay() {

// //     candleSeries.setData(
// //         marketData.slice(0, currentIndex)
// //     );

// //     chart.timeScale().setVisibleLogicalRange({
// //         from: Math.max(0, currentIndex - 80),
// //         to: currentIndex
// //     });

// // }

// // =======================
// // LOAD CSV
// // =======================

// fetch("data/HitBTC_BTCUSD_d.csv")
//     .then(response => response.text())
//     .then(csv => {

//         const lines = csv.trim().split("\n");
//         const data = [];

//         // Skip first two lines
//         for (let i = 2; i < lines.length; i++) {

//             const row = lines[i].split(",");

//             if (row.length < 7) continue;

//             data.push({
//                 time: row[1].trim(),
//                 open: Number(row[3]),
//                 high: Number(row[4]),
//                 low: Number(row[5]),
//                 close: Number(row[6])
//             });

//         }

//         // Oldest → Newest
//         data.reverse();

//        marketData = data;

//         // Load only the first 100 candles
//         candleSeries.setData(
//             marketData.slice(0, START_CANDLES)
//         );
//         chart.timeScale().fitContent();

//     });

// // =======================
// // NEXT CANDLE
// // =======================


// // nextBtn.addEventListener("click", () => {

// //     if (currentIndex >= marketData.length - 1)
// //         return;

// //     currentIndex++;

// //     updateReplay();

// // });

// nextBtn.addEventListener("click", () => {

//     if (currentIndex >= marketData.length)
//         return;

//     candleSeries.update(
//         marketData[currentIndex]
//     );

//     currentIndex++;

// });
// // =======================
// // RESPONSIVE
// // =======================

// window.addEventListener("resize", () => {

//     chart.applyOptions({
//         width: chartContainer.clientWidth,
//         height: chartContainer.clientHeight
//     });

// });



document.addEventListener("DOMContentLoaded",async()=>{
     console.log("Before initChart");
 initChart();
 console.log("after chartinit")
 const data=await loadMarketData("data/HitBTC_BTCUSD_d.csv");
 startReplay(data);
 document.getElementById("nextCandleBtn").addEventListener("click",nextCandle);
 document.querySelector(".buy-btn").addEventListener("click",buy);

document.querySelector(".close-btn").addEventListener("click",closeTrade)
});


// document.getElementById("nextCandleBtn").addEventListener("click",nextCandle);

// document.querySelector(".buy-btn").addEventListener("click",buy);

// document.querySelector(".close-btn").addEventListener("click",closeTrade)
