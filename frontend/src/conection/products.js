import axios from "axios";
import { toast } from "react-hot-toast";

// list all products
export const listProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/product");
    return response.data;
  } catch (error) {
    return error;
  }
};

// create product
export const createProduct = async (product) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/product",
      product
    );
    toast.success("Producto Creado");
    return response.data;
  } catch (error) {
    toast.error("Error al crear el producto");
    return error;
  }
};

// delete product
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/product/${id}`
    );
    toast.success("Producto Eliminado");
    return response.data;
  } catch (error) {
    toast.error("Error al eliminar el producto");
    return error;
  }
};
