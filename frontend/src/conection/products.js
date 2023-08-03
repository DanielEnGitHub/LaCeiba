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

// delete product
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/product/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
    };