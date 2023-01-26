import AppReducer from "./AppReducer";
import { createContext, useReducer } from "react";
import {
    fetchTransactionsDB,
    deleteTransactionDB,
    createTransactionDB,
} from "../utils/requests";

const initialState = {
    transactions: [],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransactions = () => {
        fetchTransactionsDB().then((transactions) => {
            for (const transaction of transactions) {
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload: transaction,
                });
            }
        });
    };

    const deleteTransaction = (id) => {
        deleteTransactionDB(id);
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    };

    const addTransaction = (transaction) => {
        createTransactionDB(transaction);
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    };

    const expensesContextValues = {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
    };
    return (
        <GlobalContext.Provider value={expensesContextValues}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
