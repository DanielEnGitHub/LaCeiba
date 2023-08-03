import React, { useEffect, useState } from "react";
import InputFormValidation from "../../components/Input/InputFormValidation/InputFormValidation";
import { Controller, useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../../conection/products";
import { Button, ModalFooter } from "@chakra-ui/react";
// import InputSelect from "../../components/Input/InputSelect";
import { getProvider } from "../../conection/provider";
import Select from "react-select";
import InputSelect from "../../components/Input/InputSelect";

const FormComponent = ({ onClose, getData, update, dataUpdate }) => {
  const [providerSelect, setProviderSelect] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.id_provaider = data.id_provaider.value;

    if (update) {
      await updateProduct(dataUpdate.id_product, data);
      getData();
      onClose();
      return;
    }
    await createProduct(data);
    getData();
    onClose();
  };

  const getDataUpdate = async () => {
    reset(dataUpdate);
  };

  useEffect(() => {
    if (update) {
      getDataUpdate();
    }
  }, [update]);

  useEffect(() => {
    const getProviderData = async () => {
      const provider = await getProvider();
      setProviderSelect(provider);
    };

    getProviderData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormValidation
          placeholder="Ingresa el nombre del producto"
          errors={errors}
          register={register}
          key_name="product"
          label="Nombre"
        />

        <InputFormValidation
          placeholder="Ingresa la descripción del producto"
          errors={errors}
          register={register}
          key_name="description"
          label="Descripción"
        />

        <InputFormValidation
          placeholder="Ingresa la fecha de expiración del producto"
          errors={errors}
          register={register}
          key_name="expiration_date"
          label="Fecha de expiración"
          type="date"
        />

        <InputFormValidation
          placeholder="Ingresa la fecha de entrada del producto"
          errors={errors}
          register={register}
          key_name="date_of_entry"
          label="Fecha de entrada"
          type="date"
        />

        <InputSelect
          options={providerSelect}
          placeholder="Proveedor"
          errors={errors}
          register={register}
          control={control}
          key_name="id_provaider"
          label="Selecciona el proveedor"
          validation
        />

        <InputFormValidation
          placeholder="Ingresa la cantidad del producto"
          errors={errors}
          register={register}
          key_name="quantity"
          label="Cantidad"
          type="number"
        />

        <InputFormValidation
          placeholder="Ingresa costo del producto"
          errors={errors}
          register={register}
          key_name="price_cost"
          label="Costo"
          type="number"
        />

        <InputFormValidation
          placeholder="Ingresa el precio de venta del producto"
          errors={errors}
          register={register}
          key_name="sale_price"
          label="Precio de venta"
          type="number"
        />

        <InputFormValidation
          placeholder="Ingresa la existencia del producto"
          errors={errors}
          register={register}
          key_name="existence"
          label="Existencia"
          type="number"
        />

        <ModalFooter p={0} m={"15px 0 5px 0"}>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button colorScheme="blue" type="submit">
            Guardar
          </Button>
        </ModalFooter>
      </form>
    </>
  );
};

export default FormComponent;
