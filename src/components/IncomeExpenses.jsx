import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const checkPos = (num) => {
        return num > 0;
    };

    const amounts = transactions.map((tx) => tx.amount);
    const income = amounts
        .filter((amount) => amount > 0)
        .reduce((sum, amount) => sum + amount, 0);
    const expense = amounts
        .filter((amount) => amount < 0)
        .reduce((sum, amount) => sum + amount, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>

                <p className="money plus">+ ${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">- ${-expense}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
