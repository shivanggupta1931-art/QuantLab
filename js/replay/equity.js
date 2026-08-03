




const equityContainer = document.getElementById("equityChart");

const equityChart = LightweightCharts.createChart(
    equityContainer,
    {
        width: equityContainer.clientWidth,
        height: 350,

        layout: {
            background: {
                color: "#111827"
            },
            textColor: "#e5e7eb"
        },

        grid: {
            vertLines: {
                color: "#1f2937"
            },
            horzLines: {
                color: "#1f2937"
            }
        },

        rightPriceScale: {
            borderColor: "#374151"
        },

        timeScale: {
            borderColor: "#374151"
        }
    }
);

const equitySeries = equityChart.addSeries(
    LightweightCharts.LineSeries,
    {
        color: "#22c55e",
        lineWidth: 3,
        priceLineVisible: false,
        lastValueVisible: true,
        crosshairMarkerVisible: true
    }
);

let equityData = [];

function addEquityPoint(equity) {

    equityData.push({
        time: equityData.length + 1,
        value: equity
    });

    equitySeries.setData(equityData);
    equityChart.timeScale().fitContent();

}

function resetEquity() {

    equityData = [];

    equitySeries.setData([]);

    equityChart.timeScale().fitContent();

}

// Keep chart responsive
window.addEventListener("resize", () => {

    equityChart.applyOptions({
        width: equityContainer.clientWidth
    });

});