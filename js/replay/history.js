const tradeHistory=[]
function addTradeToHistory(tradeData){
    tradeHistory.push(tradeData)
    renderTradeHistory();
}

function renderTradeHistory() {

    const container = document.getElementById("tradeHistory");

    if (tradeHistory.length === 0) {

        container.innerHTML = `
            <div class="empty-history">

                <h3>No trades yet</h3>

                <p>
                    Complete your first trade to build your journal.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML = "";

    tradeHistory.forEach((trade, index) => {

        const card = document.createElement("div");

        card.className = "trade-history-item";

        card.innerHTML = `

            <h3>Trade #${index + 1}</h3>

            <p><strong>Side:</strong> ${trade.side}</p>

            <p><strong>Entry:</strong> ${trade.entry.toFixed(2)}</p>

            <p><strong>Exit:</strong> ${trade.exit.toFixed(2)}</p>

            <p><strong>Duration:</strong> ${trade.duration} candles</p>

            <p><strong>Entry Time:</strong> ${trade.entryTime}</p>

            <p><strong>Exit Time:</strong> ${trade.exitTime}</p>

            <p style="color:${trade.pnl >= 0 ? "#22c55e" : "#ef4444"}">

                <strong>P/L:</strong>

                ${Number(trade.pnl).toFixed(2)}

            </p>

        `;

        container.appendChild(card);

    });

}