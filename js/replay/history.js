const tradeHistory=[]
function addTradeToHistory(trade){

    tradeHistory.unshift(trade);

    renderTradeHistory();

}

function renderTradeHistory(){

    const body = document.getElementById("tradeHistoryBody");

    body.innerHTML="";

    tradeHistory.forEach((trade,index)=>{

        const row=document.createElement("tr");

        const pnlClass=
        trade.pnl>=0
        ?"profit"
        :"loss";

        row.innerHTML=`

            <td>${tradeHistory.length - index}</td>

            <td>${trade.side}</td>

            <td>${trade.entry.toFixed(2)}</td>

            <td>${trade.exit.toFixed(2)}</td>

            <td class="${pnlClass}">
                ${trade.pnl.toFixed(2)}
            </td>

            <td>${trade.closeReason}</td>

            <td>${trade.duration}</td>

        `;

        body.appendChild(row);

    });
        document
    .getElementById("clearHistoryBtn")
    .addEventListener("click",()=>{

        tradeHistory.length=0;

        renderTradeHistory();

    });

}