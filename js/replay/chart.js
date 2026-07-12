let chart;
let candleSeries;
let replayPriceLine = null;

function initChart() {
    console.log("chart start");

    const el = document.getElementById("chart-container");

    chart = LightweightCharts.createChart(el, {

        width: el.clientWidth,
        height: el.clientHeight,

        layout: {
            background: {
                color: "#111827"
            },
            textColor: "#D1D5DB"
        },

        grid: {
            vertLines: {
                color: "#1F2937"
            },
            horzLines: {
                color: "#1F2937"
            }
        },

        rightPriceScale: {
            borderColor: "#374151"
        },

        timeScale: {
            borderColor: "#374151"
        },
        handleScroll: {
        mouseWheel: false,
        pressedMouseMove: false,
        horzTouchDrag: false,
        vertTouchDrag: false
    },

    handleScale: {
        mouseWheel: false,
        pinch: false,
        axisPressedMouseMove: false,
        axisDoubleClickReset: false
    },

    });

    candleSeries = chart.addSeries(
        LightweightCharts.CandlestickSeries,
        {
            // Disable TradingView's built-in price line
            lastValueVisible: false,
            priceLineVisible: false
            // console.log(candleSeries);
        }
        // console.log(candleSeries);
    );
    console.log(candleSeries);

    window.addEventListener("resize", () => {

        chart.applyOptions({
            width: el.clientWidth,
            height: el.clientHeight
        });

    });
    console.log("chart is end");

}