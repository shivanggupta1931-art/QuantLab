

const session = {
    // TRADE COUNTS 
    totalTrades: 0,
    winningTrades: 0,
    losingTrades: 0,


    // PERFORMANCE
    netProfit: 0,
    grossProfit: 0,
    grossLoss: 0,


    // Win / Loss Statistics
    winningAmount: 0,
    losingAmount: 0,

    averageWin: 0,
    averageLoss: 0,


    largestWin: Number.NEGATIVE_INFINITY,
    largestLoss: Number.POSITIVE_INFINITY,
    

    // RATIOS
        winRate: 0,
        profitFactor: 0,
        expectancy: 0,


    // RISK
    equityPeak:0,
    largestDrawdown:0

};



function updateSession(tradePnL){




    // console.log("Before:", JSON.stringify(session));

    session.totalTrades++;
    session.netProfit += tradePnL;

    if (tradePnL > 0) {
        session.grossProfit+=tradePnL;
        session.winningTrades++;
        session.winningAmount+=tradePnL;
      
        session.averageWin=session.winningAmount/session.winningTrades;

        session.largestWin=Math.max(session.largestWin,tradePnL);


        
    } else if (tradePnL < 0) {
        session.grossLoss+=Math.abs(tradePnL);
        
        session.losingTrades++;
        session.losingAmount+=Math.abs(tradePnL);
        session.averageLoss=session.losingAmount/session.losingTrades;

        session.largestLoss=Math.min(session.largestLoss,tradePnL);
    }

    session.profitFactor=session.grossProfit/session.grossLoss;


    

    session.winRate =
        session.totalTrades === 0
        ? 0
        : (session.winningTrades / session.totalTrades) * 100;

    // console.log("After:", JSON.stringify(session));


    const winProbability = session.winRate / 100;
    const lossProbability = session.losingTrades / session.totalTrades;

    session.expectancy =
        (winProbability * session.averageWin) -
        (lossProbability * session.averageLoss);

        // Update Equity Peak
session.equityPeak = Math.max(session.equityPeak, session.netProfit);

// Calculate Current Drawdown
const currentDrawdown = session.equityPeak - session.netProfit;

// Update Maximum Drawdown
session.largestDrawdown = Math.max(
    session.largestDrawdown,
    currentDrawdown
);

    updateSummaryCard();
    addEquityPoint(session.netProfit);
}

function updateSummaryCard(){

    // SESSION SUMMARY

document.getElementById("totalTrades").textContent = session.totalTrades;


document.getElementById("winningTrades").textContent = session.winningTrades;


document.getElementById("losingTrades").textContent = session.losingTrades;


document.getElementById("winRate").textContent =
    session.winRate.toFixed(1) + "%";

document.getElementById("netProfit").textContent =
    session.netProfit.toFixed(2);


    // AnaLytics Panel
document.getElementById("analyticsTotalTrades").textContent = session.totalTrades;
document.getElementById("analyticsWinningTrades").textContent = session.winningTrades;
document.getElementById("analyticsLosingTrades").textContent = session.losingTrades;

document.getElementById("analyticsWinRate").textContent =
    session.winRate.toFixed(1) + "%";


document.getElementById("analyticsTotalPnL").textContent =
    "$"+session.netProfit.toFixed(2);

document.getElementById("analyticsAveragePnL").textContent =
    session.totalTrades === 0
        ? "0.00"
        :"$"+(session.netProfit / session.totalTrades).toFixed(2);


// PROFITABILITY


document.getElementById("grossProfit").textContent="$"+session.grossProfit.toFixed(2);

document.getElementById("grossLoss").textContent="$"+session.grossLoss.toFixed(2);


document.getElementById("profitFactor").textContent =
    session.grossLoss === 0
        ? "--"
        : session.profitFactor.toFixed(2);

document.getElementById("expectancy").textContent =
    session.totalTrades === 0
        ? "--"
        : "$" + session.expectancy.toFixed(2);


   /* ================= TRADE PERFORMANCE ================= */


document.getElementById("averageWin").textContent=session.winningTrades===0
?"--"
:"$"+session.averageWin.toFixed(2);

document.getElementById("averageLoss").textContent=session.losingTrades===0
?"--"
:"$"+session.averageLoss.toFixed(2);


document.getElementById("largestWin").textContent = session.winningTrades === 0
? "--"
: "$" + session.largestWin.toFixed(2);




document.getElementById("largestLoss").textContent =
    session.losingTrades === 0
        ? "--"
        : "$" + session.largestLoss.toFixed(2);




        // RISK

document.getElementById("largestDrawdown").textContent =
    "$"+ session.largestDrawdown.toFixed(2);



document.getElementById("accountBalance").textContent=
"$"+account.balance.toFixed(2);


}

