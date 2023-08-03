import axios from "axios";

// list all provider
export const listProvider = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/provider");
        return response.data;
    } catch (error) {
        return error;
    }
    };

// delete provider
export const deleteProvider = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/provider/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
    };