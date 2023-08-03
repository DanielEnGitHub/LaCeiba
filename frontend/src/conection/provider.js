import axios from "axios";
import { toast } from "react-hot-toast";

// list all provider
export const listProvider = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/provider");
    return response.data;
  } catch (error) {
    return error;
  }
};

// create provider
export const createProvider = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/provider",
      data
    );
    toast.success("Proveedor Creado");
    return response.data;
  } catch (error) {
    toast.error("Error al crear el proveedor");
    return error;
  }
};

// get selected provider
export const getProvider = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/provider/`);

    const data = [];

    response.data.map((item) => {
      data.push({
        value: item.id_provaider,
        label: item.name,
      });
    });

    return data;
  } catch (error) {
    return error;
  }
};

// delete provider
export const deleteProvider = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/provider/${id}`
    );
    toast.success("Proveedor Eliminado");
    return response.data;
  } catch (error) {
    toast.error("Error al eliminar el proveedor");
    return error;
  }
};
