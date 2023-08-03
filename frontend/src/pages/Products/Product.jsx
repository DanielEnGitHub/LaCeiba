import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listProducts, deleteProduct } from "../../conection/products";
import { PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";

const Product = () => {
  const { data, getData } = useListAPI({ getFunction: listProducts });

  const columns = [
    {
      Header: "DATOS DE PRODUCTOS",
      columns: [
        {
          Header: "Codigo",
          accessor: "id_product",
        },
        {
          Header: "Nombre Producto",
          accessor: "product",
        },
        {
          Header: "Cantidad",
          accessor: "quantity",
        },
        {
          Header: "Precio",
          accessor: "price_cost",
        },
        {
          Header: "Precio Venta",
          accessor: "sale_price",
        },
        {
          Header: "Existencia",
          accessor: "existence",
        },
        {
          Header: "Acciones",
          accessor: (d) => {
            return (
              <>
                <Flex>
                  <Item icon={PiPencilBold}></Item>
                  <Item
                    icon={PiTrashBold}
                    onClick={() =>
                      sweetError(
                        d.id_product,
                        getData,
                        deleteProduct,
                        "Producto"
                      )
                    }
                  ></Item>
                </Flex>
              </>
            );
          },
        },
      ],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ContentView
        columns={columns}
        data={data}
        title={"Productos"}
        titleButton={"Crear Producto"}
        onOpen={onOpen}
      />
      <ModalCustom isOpen={isOpen} onClose={onClose} title={"Productos"}>
        <FormComponent onClose={onClose} getData={getData} />
      </ModalCustom>
    </>
  );
};

export default Product;
