import axios from "axios";

export const fetchTransactionsDB = async () => {
    const response = await axios.get("http://localhost:3000/transactions");
    return response.data;
};

export const createTransactionDB = async (transaction) => {
    const response = await axios.post(
        "http://localhost:3000/transactions",
        transaction
    );
};

export const deleteTransactionDB = async (id) => {
    const response = await axios.delete(
        `http://localhost:3000/transactions/${id}`
    );
};
