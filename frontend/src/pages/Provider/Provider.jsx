import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listProvider, deleteProvider } from "../../conection/provider";
import { PiEyeBold, PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";
import ModalCustom from "../../components/Modal";
import FormComponent from "./FormComponent";

const Provider = () => {
  const { data, getData } = useListAPI({ getFunction: listProvider });

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
                  <Item icon={PiEyeBold}></Item>
                  <Item icon={PiPencilBold}></Item>
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ContentView
        columns={columns}
        data={data}
        title={"Proveedores"}
        titleButton={"Crear Proveedor"}
        onOpen={onOpen}
      />
      <ModalCustom isOpen={isOpen} onClose={onClose} title={"Proveedores"}>
        <FormComponent onClose={onClose} getData={getData} />
      </ModalCustom>
    </>
  );
};

export default Provider;
