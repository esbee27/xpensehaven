import axios from "axios";

const API_BASE_URL = "https://your-api-url.com";

export const fetchTransactions = async (filter = "all") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transactions`, {
      params: { filter },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

export const addTransaction = async (transactionData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/transactions`,
      transactionData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
};

export const editTransaction = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/transactions/${id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error editing transaction:", error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
};
