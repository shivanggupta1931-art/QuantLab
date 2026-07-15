
function updatePositionCard(){

    document.getElementById("positionSizeValue").textContent=
    trade.inPosition?
    trade.positionSize:"--"

    document.getElementById("positionStatus").textContent=
    trade.inPosition?
    trade.side:"NONE";
    
    document.getElementById("entryPrice").textContent=
    trade.inPosition?
    trade.entryPrice.toFixed(2):"--";

    document.getElementById("currentPrice").textContent=
    trade.inPosition?
    trade.currentPrice.toFixed(2):"--";


    document.getElementById("stopLoss").textContent=
    trade.inPosition
        ?Number(trade.stopLoss).toFixed(2)
        :"--";

    const pnl=document.getElementById("profitLoss")

    if(trade.inPosition){
        pnl.textContent=Number(trade.profitLoss).toFixed(2);

        pnl.style.color=trade.profitLoss>=0 
            ?"#22c55e": "#ef4444";

    }else{
        pnl.textContent="0.00"
        pnl.style.color="#ffffff";
    }

}