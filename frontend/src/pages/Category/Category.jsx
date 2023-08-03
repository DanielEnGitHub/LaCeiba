import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listCategory, deleteCategory } from "../../conection/category";
import { PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ContentView
        columns={columns}
        data={data}
        title={"Categorias"}
        titleButton={"Crear Categoria"}
        onOpen={onOpen}
      />
      <ModalCustom isOpen={isOpen} onClose={onClose} title={"Categorias"}>
        <FormComponent onClose={onClose} getData={getData} />
      </ModalCustom>
    </>
  );
};

export default Category;
