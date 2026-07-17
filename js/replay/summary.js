

const session = {
    totalTrades: 0,
    winningTrades: 0,
    losingTrades: 0,

    netProfit: 0,
    winRate: 0,

    bestTrade: Number.NEGATIVE_INFINITY,
    worstTrade: Number.POSITIVE_INFINITY,

    averageWin: 0,
    averageLoss: 0,

    grossProfit: 0,
    grossLoss: 0,

    profitFactor: 0,

    largestDrawdown: 0,

    expectancy: 0
};



function updateSession(tradePnL){

    // console.log("Before:", JSON.stringify(session));

    session.totalTrades++;
    session.netProfit += tradePnL;

    if (tradePnL > 0) {
        session.winningTrades++;
    } else if (tradePnL < 0) {
        session.losingTrades++;
    }

    session.winRate =
        session.totalTrades === 0
        ? 0
        : (session.winningTrades / session.totalTrades) * 100;

    // console.log("After:", JSON.stringify(session));

    updateSummaryCard();
    addEquityPoint(session.netProfit);
}

function updateSummaryCard(){

document.getElementById("totalTrades").textContent = session.totalTrades;
document.getElementById("analyticsTotalTrades").textContent = session.totalTrades;

document.getElementById("winningTrades").textContent = session.winningTrades;
document.getElementById("analyticsWinningTrades").textContent = session.winningTrades;

document.getElementById("losingTrades").textContent = session.losingTrades;
document.getElementById("analyticsLosingTrades").textContent = session.losingTrades;

document.getElementById("winRate").textContent =
    session.winRate.toFixed(1) + "%";

document.getElementById("analyticsWinRate").textContent =
    session.winRate.toFixed(1) + "%";
    document.getElementById("netProfit").textContent =
    session.netProfit.toFixed(2);

document.getElementById("analyticsTotalPnL").textContent =
    "$"+session.netProfit.toFixed(2);

    document.getElementById("analyticsAveragePnL").textContent =
    session.totalTrades === 0
        ? "0.00"
        :"$"+(session.netProfit / session.totalTrades).toFixed(2);
}

