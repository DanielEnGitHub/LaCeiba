import React from "react";
import InputFormValidation from "../../components/Input/InputFormValidation/InputFormValidation";
import { useForm } from "react-hook-form";
import { createProduct } from "../../conection/products";
import { Button, ModalFooter } from "@chakra-ui/react";

const FormComponent = ({ onClose, getData }) => {
  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await createProduct(data);
    getData();
    onClose();
  };

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

        <InputFormValidation
          placeholder="Ingresa el proveedor"
          errors={errors}
          register={register}
          key_name="id_provaider"
          label="Proveedor"
          type="number"
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
