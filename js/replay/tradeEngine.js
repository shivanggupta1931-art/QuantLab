const trade = {
    inPosition: false,
    side: null,
    entryPrice: 0,
    currentPrice: 0,
    profitLoss: 0,
    totalTrades: 0,
    positionSize:0,
    entryIndex:0,
    entryTime:null
};

function buy() {

   
    if (trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];




    trade.inPosition = true;
   trade.positionSize = Math.max(
    1,
    Number(document.getElementById("positionSize").value)
);
    trade.side = "LONG";
    trade.entryPrice = last.close;
    trade.currentPrice = last.close;
    trade.profitLoss = (trade.currentPrice-trade.entryPrice)*trade.positionSize;


    trade.entryIndex = replay.currentIndex;
    trade.entryTime = last.time; 






    console.log("BUY @", trade.entryPrice);
    updatePositionCard();
}



function sell(){
    if(trade.inPosition)
        return;
    
    const last=replay.visibleData[
        replay.visibleData.length-1
    ];

    trade.inPosition=true;

    trade.positionSize=Number(document.getElementById("positionSize").value);

    trade.side="SHORT";
    trade.entryPrice=last.close;
    trade.profitLoss=0;
    trade.currentPrice=last.close;
    trade.entryTime=last.time;

    trade.entryIndex=replay.currentIndex; 
    console.log("SELL @", trade.entryPrice);
    updatePositionCard();
}

function updateTrade() {


    if (!trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];

    trade.currentPrice = last.close;
    // trade.profitLoss = Number((trade.currentPrice - trade.entryPrice)*trade.positionSize).toFixed(2);

    if(trade.side=="LONG"){
        trade.profitLoss=Number((trade.currentPrice-trade.entryPrice)*trade.positionSize).toFixed(2)
    }
    else{
        trade.profitLoss=Number((trade.entryPrice-trade.currentPrice)*trade.positionSize).toFixed(2);
    }
    
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

                size: trade.positionSize,

                duration,

                entryTime: trade.entryTime,

                exitTime: last.time

            });


    trade.inPosition = false;
    trade.side = null;
    trade.totalTrades++;
    updatePositionCard();
}

console.log("tradeEngine loaded completely");