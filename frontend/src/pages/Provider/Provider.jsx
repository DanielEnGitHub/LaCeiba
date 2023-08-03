import React, { useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import {
  listProvider,
  deleteProvider,
  getByIdProvider,
} from "../../conection/provider";
import { PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";
import useUpdate from "../../hooks/useUpdate";

const Provider = () => {
  // custom hook
  const { data, getData } = useListAPI({ getFunction: listProvider });

  // useDisclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { update, setUpdate, dataUpdate, setDataUpdate, handleUpdate } =
    useUpdate({ getById: getByIdProvider, onOpen });

  const columns = [
    {
      Header: "DATOS DE PROVEEDOR",
      columns: [
        {
          Header: "ID",
          accessor: "id_provaider",
        },
        {
          Header: "Nombres",
          accessor: (d) => {
            return (
              <>
                <span>{d.name + " " + d.last_name}</span>
              </>
            );
          },
        },
        {
          Header: "Nit",
          accessor: "nit",
        },
        {
          Header: "Acciones",
          accessor: (d) => {
            return (
              <>
                <Flex>
                  <Item
                    onClick={() => handleUpdate(d.id_provaider)}
                    icon={PiPencilBold}
                  ></Item>
                  <Item
                    icon={PiTrashBold}
                    onClick={() =>
                      sweetError(
                        d.id_provaider,
                        getData,
                        deleteProvider,
                        "Proveedor"
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
        title={"Proveedores"}
        titleButton={"Crear Proveedor"}
        onOpen={onOpen}
        setUpdate={setUpdate}
      />
      <ModalCustom isOpen={isOpen} onClose={onClose} title={"Proveedores"}>
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

export default Provider;
