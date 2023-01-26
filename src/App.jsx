import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalProvider, { GlobalContext } from "./context/GlobalContext";

const App = () => {
    const { getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, []);
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    );
};

export default App;
