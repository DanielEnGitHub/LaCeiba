import React from "react";
import { Flex } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listCategory, deleteCategory } from "../../conection/category";
import { PiEyeBold, PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
const Category = () => {
  const { data, getData } = useListAPI({ getFunction: listCategory });

  const columns = [
    {
      Header: "DATOS DE LAS CATEGORIAS",
      columns: [
        {
          Header: "ID",
          accessor: "id_category",
        },
        {
          Header: "Nombre Categoria",
          accessor: "categoria",
        },
        {
          Header: "Descripcion",
          accessor: "description",
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
                        d.id_category,
                        getData,
                        deleteCategory,
                        "Categoria"
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

  return <ContentView columns={columns} data={data} title={"Categorias"} />;
};

export default Category;
