import React, { useEffect } from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import TableComponent from '../../components/Tables/TableComponent';
import useListAPI from "../../hooks/useListAPI";
import {listProducts} from "../../conection/products";

const columns =  [
  {
    Header: "Productos",
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
              nada
            </>
          );
        },
      },
    ],
  },
];

const Product = () => {
  const { data, getData } = useListAPI({ getFunction: listProducts });

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
          <Text as={'span'} color={'orange.400'}>
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