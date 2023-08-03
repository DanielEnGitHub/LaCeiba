import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import {
  listProducts,
  deleteProduct,
  getByIdProduct,
} from "../../conection/products";
import { PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";
import useUpdate from "../../hooks/useUpdate";

const Product = () => {
  // useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  // custom hook
  const { data, getData } = useListAPI({ getFunction: listProducts });
  const { update, setUpdate, dataUpdate, handleUpdate } = useUpdate({
    getById: getByIdProduct,
    onOpen,
  });

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
                  <Item
                    onClick={() => handleUpdate(d.id_product)}
                    icon={PiPencilBold}
                  ></Item>
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

  return (
    <>
      <ContentView
        columns={columns}
        data={data}
        title={"Productos"}
        titleButton={"Crear Producto"}
        onOpen={onOpen}
        setUpdate={setUpdate}
      />
      <ModalCustom isOpen={isOpen} onClose={onClose} title={"Productos"}>
        <FormComponent
          onClose={onClose}
          getData={getData}
          update={update}
          dataUpdate={dataUpdate}
        />
      </ModalCustom>
    </>
  );
};

export default Product;
