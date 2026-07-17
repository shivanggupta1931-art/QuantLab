

const trade = {
    inPosition: false,
    side: null,
    entryPrice: 0,
    currentPrice: 0,
    profitLoss: 0,
    totalTrades: 0,
    positionSize: 0,
    entryIndex: 0,
    entryTime: null,
    stopLoss: null,
    takeProfit: null,
    closeReason: null,
};

function resetTrade() {
    trade.inPosition = false;
    trade.side = null;
    trade.entryPrice = 0;
    trade.currentPrice = 0;
    trade.profitLoss = 0;
    trade.positionSize = 0;
    trade.entryIndex = 0;
    trade.entryTime = null;
    trade.stopLoss = null;
    trade.takeProfit = null;
    trade.closeReason = null;
}



function setupTrade() {
    trade.positionSize = Number(document.getElementById("positionSize").value);

    trade.stopLoss = document.getElementById("stopLoss").value
        ? Number(document.getElementById("stopLoss").value)
        : null;

    const tpInput = document.getElementById("takeProfit");
    trade.takeProfit = tpInput && tpInput.value
        ? Number(tpInput.value)
        : null;
}

function buy() {
    if (trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];

    trade.inPosition = true;
    setupTrade();

    trade.side = "LONG";
    trade.entryPrice = last.close;
    trade.currentPrice = last.close;
    trade.profitLoss = 0;
    trade.entryIndex = replay.currentIndex;
    trade.entryTime = last.time;






console.log("BUY");
console.log("Current Index:", replay.currentIndex);
console.log("Entry Price:", trade.entryPrice);
console.log("Visible Candle:", replay.visibleData[replay.visibleData.length - 1]);




    updatePositionCard();
}

function sell() {
    if (trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];

    trade.inPosition = true;
    setupTrade();

    trade.side = "SHORT";
    trade.entryPrice = last.close;
    trade.currentPrice = last.close;
    trade.profitLoss = 0;
    trade.entryIndex = replay.currentIndex;
    trade.entryTime = last.time;

    updatePositionCard();
}

function updateTrade() {
    if (!trade.inPosition) return;

    const last = replay.visibleData[replay.visibleData.length - 1];
    trade.currentPrice = last.close;

    if (trade.side === "LONG") {
        trade.profitLoss = (trade.currentPrice - trade.entryPrice) * trade.positionSize;
    } else {
        trade.profitLoss = (trade.entryPrice - trade.currentPrice) * trade.positionSize;
    }

    if (trade.side === "LONG" &&
        trade.stopLoss !== null &&
        trade.currentPrice <= trade.stopLoss) {
        trade.closeReason = "Stop Loss";
        closeTrade();
        return;
    }

    if (trade.side === "SHORT" &&
        trade.stopLoss !== null &&
        trade.currentPrice >= trade.stopLoss) {
        trade.closeReason = "Stop Loss";
        closeTrade();
        return;
    }



    // TAKE PROFIT
    if(trade.side=="LONG" &&
        trade.takeProfit!==null &&
        trade.currentPrice>=trade.takeProfit
    ){
        trade.closeReason="Take Profit"
        closeTrade();
        return;
    }

    if(
        trade.side=="SHORT" &&
        trade.takeProfit!==null&&
        trade.currentPrice<=trade.takeProfit
    ){
        trade.closeReason="Take Profit"
        closeTrade();
        return;
    }

    updatePositionCard();
}

function closeTrade() {
    if (!trade.inPosition) return;

    updateSession(trade.profitLoss);

    const last = replay.visibleData[replay.visibleData.length - 1];
    const duration = replay.currentIndex - trade.entryIndex;

    addTradeToHistory({
        side: trade.side,
        entry: trade.entryPrice,
        exit: trade.currentPrice,
        pnl: trade.profitLoss,
        size: trade.positionSize,
        duration,
        entryTime: trade.entryTime,
        exitTime: last.time,
        closeReason: trade.closeReason || "Manual"
    });

    

    trade.totalTrades++;


    resetTrade();

    updatePositionCard();
}
console.log("tradeEngine loaded completely");



