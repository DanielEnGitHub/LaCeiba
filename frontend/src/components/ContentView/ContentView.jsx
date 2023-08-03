import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TableComponent from "../Tables/TableComponent";
import { textSlice } from "../../utils/libs";

const ContentView = ({ columns, data, title, titleButton, onOpen }) => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Flex minWidth="95%" alignItems="center" gap="2">
          <Box p="2">
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
          </Box>
          <Spacer />
          <Button colorScheme="blue" onClick={onOpen}>
            {titleButton}
          </Button>
        </Flex>

        <TableComponent columns={columns} data={data} />
      </Stack>
    </Container>
  );
};

export default ContentView;
