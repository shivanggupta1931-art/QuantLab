const session={

    totalTrades:0,
    winningTrades:0,
    losingTrades:0,
    netProfit:0,
    winRate:0,
    bestTrade: -Infinity,

worstTrade: Infinity,

}

function updateSession(tradePnL){
    session.totalTrades++;
    session.netProfit+=tradePnL;

    if(tradePnL>0){
        session.winningTrades++;
    }
    else if(tradePnL<0){
        session.losingTrades++;
    }

    if(session.totalTrades===0){
        session.winRate=0

    }
    else{
        session.winRate=(session.winningTrades/session.totalTrades)*100;
        
    }

    session.bestTrade =
Math.max(
session.bestTrade,
tradePnL
);

session.worstTrade =
Math.min(
session.worstTrade,
tradePnL
);
    // session.winRate=session.totalTrade===0
    //     ?0
    //     :(session.winningTrade/session.totalTrade)*100;

        updateSummaryCard();


}

function updateSummaryCard(){

    // document.getElementById("sizePositionValue").textContent=
    document.getElementById("totalTrades").textContent=session.totalTrades;

    document.getElementById("winningTrades").textContent=session.winningTrades;

    document.getElementById("losingTrades").textContent =session.losingTrades;


    document.getElementById("winRate").textContent =session.winRate.toFixed(1) + "%";

    const pnl=document.getElementById("netProfit");

    pnl.textContent=Number(session.netProfit).toFixed(2);

    pnl.style.color=session.netProfit>=0
        ?"#22c55e"
        :"#ef4444";
}

