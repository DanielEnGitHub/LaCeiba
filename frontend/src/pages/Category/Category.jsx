import React, { useEffect } from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import TableComponent from '../../components/Tables/TableComponent';
import useListAPI from "../../hooks/useListAPI";
import {listCategory, deleteCategory} from "../../conection/category";
import { PiEyeBold, PiPencilBold, PiTrashBold } from 'react-icons/pi';
import Swal from 'sweetalert2';
import Item from '../../components/Buttons';
const Category = () => {
    const { data, getData } = useListAPI({ getFunction: listCategory });

    const sweetError = (id) => {
      Swal.fire({
        title: '¿Estás de eliminar la categoria?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, eliminar!',
        cancelButtonText: 'Cancelar',
      }).then( async(result) => {
        if (result.isConfirmed) {
          await deleteCategory(id);
          getData();
        }
      });
    }
    
  const columns =  [
    {
      Header: "DATOS DE LAS CATEGORIAS",
      columns: [
        { 
          Header: "ID", 
          accessor: "id_category" 
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
                <Item icon={PiTrashBold} onClick={()=>sweetError(d.id_category)}></Item>
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
          Categ
          <Text as={'span'} color={'blue.400'}>
            orias
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

export default Category