import axios from "axios";

// list all categories
export const listCategory = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/category");
        return response.data;
    } catch (error) {
        return error;
    }
    };

// delete category
export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/category/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
    };