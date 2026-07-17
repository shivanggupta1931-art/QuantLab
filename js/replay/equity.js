const equityChart=LightweightCharts.createChart(
    document.getElementById("equityChart"),
    {
        width:document.getElementById("equityChart").clientWidth,
        height:350,

        layout:{
            background:{
                color:"#111827"
            },
            textColor:"#e5e7eb"
        },

        grid:{
            vertLines:{
                color:"#1f2937"
            },
            horzLines:{
                color:"#1f2937"
            },
        },
    
        rightPriceScale: {
            borderColor: "#374151"
        },

          timeScale: {
            borderColor: "#374151"
        }
    }
)

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


let equityData=[]

function addEquityPoint(equity){
    console.log("addEquityPoint called:", equity);
    equityData.push({
        time:equityData.length+1,
        value:equity
    });
        console.log(equityData);
    equitySeries.setData(equityData);
    equityChart.timeScale().fitContent();
}