import React from "react";
import InputFormValidation from "../../components/Input/InputFormValidation/InputFormValidation";
import { useForm } from "react-hook-form";
import { createProvider } from "../../conection/provider";
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
    await createProvider(data);
    getData();
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormValidation
          placeholder="Ingresa el nombre del proveedor"
          errors={errors}
          register={register}
          key_name="name"
          label="Nombre"
        />

        <InputFormValidation
          placeholder="Ingresa el apellido del proveedor"
          errors={errors}
          register={register}
          key_name="last_name"
          label="Apellido"
        />

        <InputFormValidation
          placeholder="Ingresa el nit del proveedor"
          errors={errors}
          register={register}
          key_name="nit"
          label="Nit"
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
