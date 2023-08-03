import { theme } from "../../../theme";

export const customStyles = (error) => {
  if (error) {
    console.log();
  }

  const error_color = theme.colors.brand.error;
  const primary_color = "#0BC5EA";
  const white = theme.colors.brand.white;
  const disabled_color = theme.colors.brand.disabled;
  const black_color = theme.colors.brand.black;
  const gray_color = theme.colors.brand.gray;
  const border_color = error ? error_color : primary_color;

  return {
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isFocused ? white : black_color,
        backgroundColor: state.isFocused ? primary_color : white,
        minHeight: "48px",
        paddingTop: "13px",
        ":active": {
          backgroundColor: "#0740A3",
          color: white,
        },
      };
    },
    control: (provided, state) => ({
      ...provided,

      borderWidth: "1px",
      borderColor: state.isFocused || error ? border_color : gray_color,
      outline: state.isFocused || error ? `1px solid ${border_color}` : "none",
      minHeight: 48,
      minWidth: 300,
      boxShadow: "none",
      ":hover": {
        borderColor: state.isFocused || error ? border_color : gray_color,
      },
      transition: "all 0.2s",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = state.isDisabled ? "#000" : black_color;
      return { ...provided, opacity, transition, color };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: gray_color,
      };
    },
  };
};
