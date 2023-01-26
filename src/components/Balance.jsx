import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((t) => t.amount);
    const sum = amounts.reduce((sum, amount) => sum + amount, 0);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${sum}</h1>
        </>
    );
};

export default Balance;
