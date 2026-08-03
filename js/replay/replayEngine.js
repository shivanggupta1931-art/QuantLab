let replayTimer=null;
let isPlaying=false;
let playbackSpeed=1000;


function playReplay(){
    if(isPlaying){
        return;
    }
    isPlaying=true;
    replayTimer=setInterval(()=>{
        if(replay.currentIndex>=replay.allData.length){
            pauseReplay();
            return;
        }
        nextCandle();
    },playbackSpeed)
}



function pauseReplay(){
    clearInterval(replayTimer);
    replayTimer=null;
    isPlaying=false;
}

function toggleReplay(){
    if(isPlaying){
        pauseReplay();
    }
    else{
        playReplay();
    }

}

const replay = {
    allData: [],
    visibleData: [],
    currentIndex: START_CANDLES
};

function updateReplayPriceLine() {

    if (replayPriceLine) {
        candleSeries.removePriceLine(replayPriceLine);
    }

    const last = replay.visibleData[replay.visibleData.length - 1];

    if (!last) return;

    replayPriceLine = candleSeries.createPriceLine({
        price: last.close,
        color: "#2962FF",
        lineWidth: 2,
        lineStyle: LightweightCharts.LineStyle.Solid,
        axisLabelVisible: true,
        title: ""
    });
}

function updateCurrentPriceLine() {

    const last = replay.visibleData[replay.visibleData.length - 1];

    if (!last) return;

    const y = candleSeries.priceToCoordinate(last.close);

    if (y === null) return;

    document.getElementById("current-price-line").style.top = `${y}px`;
}

function startReplay(data) {

    const START_INDEX = 50;

    replay.allData = data;

    replay.visibleData = data.slice(
        START_INDEX,
        START_INDEX + START_CANDLES
    );

    replay.currentIndex = START_INDEX + START_CANDLES;

    candleSeries.setData(replay.visibleData);

    updateReplayPriceLine();

    moveCamera();
}
function nextCandle() {

    if (replay.currentIndex >= replay.allData.length)
        return;

    replay.visibleData.push(
        replay.allData[replay.currentIndex]
    );

    replay.currentIndex++;

    updateTrade();

    candleSeries.setData(replay.visibleData);

    updateReplayPriceLine();

    moveCamera();
    saveCurrentState();
}