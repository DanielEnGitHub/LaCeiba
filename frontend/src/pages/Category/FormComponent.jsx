import React from "react";
import InputFormValidation from "../../components/Input/InputFormValidation/InputFormValidation";
import { useForm } from "react-hook-form";
import { createCategory } from "../../conection/category";
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
    await createCategory(data);
    getData();
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormValidation
          placeholder="Ingresa el nombre de la categoria"
          errors={errors}
          register={register}
          key_name="categoria"
          label="Categoria"
        />

        <InputFormValidation
          placeholder="Ingresa la descripcion de la categoria"
          errors={errors}
          register={register}
          key_name="description"
          label="Descripcion"
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
