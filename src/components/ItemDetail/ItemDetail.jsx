import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
const ItemDetail = ({ categoria, descripcion, image, nombre, precio }) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            

            <Box>
              <Heading size="sm"> {nombre} </Heading>
              <Text>Categoria: {categoria}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            // icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{descripcion}</Text>
        <Text>$ {precio}</Text>
      </CardBody>
      <Image objectFit="cover" src={image} alt="Chakra UI" />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      ></CardFooter>
    </Card>
  );
};

export default ItemDetail;
