import React from "react";
import { Flex } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listProducts, deleteProduct } from "../../conection/products";
import { PiEyeBold, PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";

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
                  <Item icon={PiEyeBold}></Item>
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

  return <ContentView columns={columns} data={data} title={"Productos"} />;
};

export default Product;
