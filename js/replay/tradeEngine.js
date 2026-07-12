

const trade = {
    inPosition: false,
    side: null,
    entryPrice: 0,
    currentPrice: 0,
    profitLoss: 0,
    totalTrades: 0
};

function buy() {

   
    if (trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];




    trade.inPosition = true;
    trade.side = "LONG";
    trade.entryPrice = last.close;
    trade.currentPrice = last.close;
    trade.profitLoss = 0;


    trade.entryIndex = replay.currentIndex;
    trade.entryTime = last.time; 



    // trade.entryTime=last.time;
    // tradeMarkers.push({
    //     time:last.time,
    //     position:"belowBar",
    //     color:"#22c55e",
    //     shape:"arrowUp",
    //     text: "BUY",
    // })
    // refreshMarkers();


    console.log("BUY @", trade.entryPrice);
    updatePositionCard();
}

function updateTrade() {
    if (!trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];

    trade.currentPrice = last.close;
    trade.profitLoss = Number(trade.currentPrice - trade.entryPrice).toFixed(2);
    
    updatePositionCard();
}

function closeTrade() {
    if (!trade.inPosition) return;

    console.log("Trade Closed", trade.profitLoss);
    updateSession(trade.profitLoss);

        const last = replay.visibleData[
        replay.visibleData.length - 1
    ];




    const duration =
    replay.currentIndex -
    trade.entryIndex;


    const percentage =

        (
        trade.profitLoss /
        trade.entryPrice
        )

        *100;


   


        addTradeToHistory({

            side: trade.side,

            entry: trade.entryPrice,

            exit: trade.currentPrice,

            pnl: trade.profitLoss,

            duration,

            entryTime: trade.entryTime,

            exitTime:
                replay.visibleData[
                    replay.visibleData.length-1
                ].time

        });



    trade.inPosition = false;
    trade.side = null;
    trade.totalTrades++;
    updatePositionCard();
}

console.log("tradeEngine loaded completely");