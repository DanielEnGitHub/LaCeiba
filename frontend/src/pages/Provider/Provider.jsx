import React from "react";
import { Flex } from "@chakra-ui/react";
import useListAPI from "../../hooks/useListAPI";
import { listProvider, deleteProvider } from "../../conection/provider";
import { PiEyeBold, PiPencilBold, PiTrashBold } from "react-icons/pi";
import Item from "../../components/Buttons";
import ContentView from "../../components/ContentView";
import { sweetError } from "../../utils/libs";

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

  return <ContentView columns={columns} data={data} title={"Proveedores"} />;
};

export default Provider;
