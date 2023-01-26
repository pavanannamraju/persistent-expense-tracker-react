import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function moneyFormatter(num) {
    let p = num.toFixed(2).split(".");
    return (
        "$ " +
        p[0]
            .split("")
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === "-"
                    ? acc
                    : num + (i && !(i % 3) ? "," : "") + acc;
            }, "") +
        "." +
        p[1]
    );
}
const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    const handleDeleteClick = (id) => {
        console.log(id);
        deleteTransaction(id);
    };
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <li
                        className={transaction.amount > 0 ? "plus" : "minus"}
                        key={transaction.id}
                    >
                        {transaction.text}
                        <span>{moneyFormatter(transaction.amount)}</span>
                        <button
                            className="delete-btn"
                            onClick={() => handleDeleteClick(transaction.id)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
