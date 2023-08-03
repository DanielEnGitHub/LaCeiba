import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import {
  listCategory,
  deleteCategory,
  getByIdCategory,
} from "../../conection/category";
import { PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";
import useUpdate from "../../hooks/useUpdate";
const Category = () => {
  // useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  // custom hook
  const { data, getData } = useListAPI({ getFunction: listCategory });
  const { update, setUpdate, dataUpdate, handleUpdate } = useUpdate({
    getById: getByIdCategory,
    onOpen,
  });

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
                  <Item
                    onClick={() => {
                      handleUpdate(d.id_category);
                    }}
                    icon={PiPencilBold}
                  ></Item>
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
  return (
    <>
      <ContentView
        columns={columns}
        data={data}
        title={"Categorias"}
        titleButton={"Crear Categoria"}
        onOpen={onOpen}
        setUpdate={setUpdate}
      />
      <ModalCustom
        isOpen={isOpen}
        onClose={onClose}
        title={"Categorias"}
        update={update}
      >
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

export default Category;
