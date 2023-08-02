import axios from "axios";

// list all products
export const listProducts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/product");
        return response.data;
    } catch (error) {
        return error;
    }
    };