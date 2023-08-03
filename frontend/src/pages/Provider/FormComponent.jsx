import React, { useEffect } from "react";
import InputFormValidation from "../../components/Input/InputFormValidation/InputFormValidation";
import { useForm } from "react-hook-form";
import { createProvider, updateProvider } from "../../conection/provider";
import { Button, ModalFooter } from "@chakra-ui/react";

const FormComponent = ({ onClose, getData, update, dataUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (update) {
      await updateProvider(dataUpdate.id_provaider, data);
      getData();
      onClose();
      return;
    }
    await createProvider(data);
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
