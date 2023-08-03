import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import useZIndex from "../../../hooks/useZindex";

const InputFormValidation = ({
  Icon,
  placeholder,
  disabled,
  error = false,
  success = false,
  errors = "",
  register,
  key_name,
  label = "",
  type = "text",
  marginBottom = "",
  marginTop = "",
  validation = true,
}) => {
  const { zIndex, onFocus, onBlur } = useZIndex();
  return (
    <FormControl isInvalid={errors[key_name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {Icon && (
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            zIndex={zIndex}
            // children="$"
            children={
              <Icon
                alt={"icon"}
                width="17px"
                marginLeft="7px"
                marginTop="6px"
              />
            }
          />
        )}
        <Input
          minHeight="48px"
          autoComplete="off"
          id={key_name}
          placeholder={placeholder}
          borderColor={
            error ? "brand.error" : success ? "brand.success" : "brand.gray"
          }
          _placeholder={{ color: "brand.gray" }}
          focusBorderColor={
            errors[key_name]
              ? "brand.error"
              : success
              ? "brand.success"
              : "secondary.500"
          }
          style={{
            boxSizing: "border-box",
          }}
          disabled={disabled}
          _hover={{
            borderColor: error
              ? "brand.error"
              : success
              ? "brand.success"
              : "brand.gray",
          }}
          _disabled={{
            backgroundColor: "brand.disabled",
            cursor: "not-allowed",
            _hover: { borderColor: "brand.gray" },
          }}
          {...register(
            key_name,
            validation
              ? {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 1,
                    message: "Este campo debe tener al menos 4 caracteres",
                  },
                }
              : {}
          )}
          type={type}
          marginBottom={marginBottom}
          marginTop={marginTop}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {errors[key_name] && errors[key_name].message && (
          <InputRightElement zIndex={zIndex} />
        )}
        {success && <InputRightElement zIndex={1} />}
      </InputGroup>
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputFormValidation;
