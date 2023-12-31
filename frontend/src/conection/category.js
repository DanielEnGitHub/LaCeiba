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

// get by id category
export const getByIdCategory = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/category/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// update category
export const updateCategory = async (id, category) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/category/${id}`,
      category
    );
    toast.success("Categoria Actualizada");
    return response.data;
  } catch (error) {
    toast.error("Error al actualizar la categoria");
    return error;
  }
};

// get select category
export const getSelectCategory = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/category/`);
    const data = response.data.map((category) => ({
      value: category.id_category,
      label: category.categoria,
    }));
    return data;
  } catch (error) {
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
