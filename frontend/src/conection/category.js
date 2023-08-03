import axios from "axios";
import { toast } from "react-hot-toast";

// list all categories
export const listCategory = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    return response.data;
  } catch (error) {
    return error;
  }
};

// create category
export const createCategory = async (category) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/category",
      category
    );
    toast.success("Categoria Creada");
    return response.data;
  } catch (error) {
    toast.error("Error al crear la categoria");
    return error;
  }
};

// delete category
export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/category/${id}`
    );
    toast.success("Categoria Eliminada");
    return response.data;
  } catch (error) {
    toast.error("Error al eliminar la categoria");
    return error;
  }
};
