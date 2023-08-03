import { Box, Flex, Icon } from "@chakra-ui/react";

const Item = ({ icon, onClick = () => {}, children, ...rest }) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex
          w={10}
          align="center"
          justify="center"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          onClick={ onClick}
          {...rest}
        >
          {icon && (
            <Icon
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
        </Flex>
      </Box>
    );
  }

  export default Item;