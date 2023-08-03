import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TableComponent from "../Tables/TableComponent";
import { textSlice } from "../../utils/libs";

const ContentView = ({ columns, data, title }) => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {textSlice(title)[0]}
          <Text as={"span"} color={"blue.400"}>
            {textSlice(title)[1]}
          </Text>
        </Heading>

        <Stack spacing={6} direction={"row"}>
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
      </Stack>
    </Container>
  );
};

export default ContentView;
