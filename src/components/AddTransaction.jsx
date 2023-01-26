import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text,
            amount: +amount,
        };

        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    };
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;
