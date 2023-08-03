import React, { useEffect } from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Icon,
} from '@chakra-ui/react'
import TableComponent from '../../components/Tables/TableComponent';
import useListAPI from "../../hooks/useListAPI";
import {listProducts, deleteProduct} from "../../conection/products";
import { PiEyeBold, PiPencilBold, PiTrashBold } from 'react-icons/pi';
import Swal from 'sweetalert2';
import Item from '../../components/Buttons';



const Product =  () => {
  const { data, getData } = useListAPI({ getFunction: listProducts });

  const sweetError = (id) => {
    Swal.fire({
      title: '¿Estás de eliminar el producto?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then( async(result) => {
      if (result.isConfirmed) {
        await deleteProduct(id);
        getData();
      }
    });
  }
  
const columns =  [
  {
    Header: "DATOS DE PRODUCTOS",
    columns: [
      { 
        Header: "Codigo", 
        accessor: "id_product" 
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
              <Item icon={PiTrashBold} onClick={()=>sweetError(d.id_product)}></Item>
            </Flex>
            </>
          );
        },
      },
    ],
  },
];


  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Prod
          <Text as={'span'} color={'blue.400'}>
            uctos
          </Text>
        </Heading>

        <Stack spacing={6} direction={'row'}>
        <TableComponent columns={columns} data={data} />
          {/* <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button> */}
        </Stack>
        <Flex w={'full'}>
          {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
        </Flex>
      </Stack>
    </Container>
  )
}

export default Product;