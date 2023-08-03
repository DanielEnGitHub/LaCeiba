import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
// import { ErrorIcon } from "../../../Utils/icons";
import { customStyles } from "./customStyles";

const InputSelect = ({
  placeholder,
  options,
  disabled,
  errors = "",
  key_name,
  label = "",
  control,
  validation = false,
  isMulti = false,
}) => {
  return (
    <FormControl isInvalid={errors[key_name]} position="relative">
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        control={control}
        name={key_name}
        rules={
          validation
            ? {
                required: "Este campo es requerido",
              }
            : {}
        }
        render={({ field }) => (
          <Select
            {...field}
            disabled={disabled}
            isMulti={isMulti}
            options={options}
            placeholder={placeholder}
            styles={customStyles(errors && errors[key_name])}
          />
        )}
      />
      {/* {errors[key_name] && errors[key_name].message && (
          <Image
            src={ErrorIcon}
            alt={"icon"}
            width="19px"
            marginRight="7px"
            marginTop="7px"
            position={"absolute"}
            top={10}
            right={1}
          />
        )} */}
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputSelect;
