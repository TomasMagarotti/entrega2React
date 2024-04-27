import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Box,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ image, nombre, precio, id, descripcion }) => {
  return (
   
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={nombre} borderRadius="md" boxSize='100%' objectFit='cover'/>
        <Stack mt="6" spacing="3">
          <Heading align={'center'} size="md">{nombre}</Heading>
          <Text align={'center'}>{descripcion}</Text>
          <Text align={'center'} color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex spacing="2" justify={'center'} align={'center'} >
          <Button justify={'center'} align={'center'} variant="solid" colorScheme="blue">
            <Link to = {`/product/${id}`}>Ver detalle</Link>
          </Button>
        </Flex>
      </CardFooter>
    </Card>
    
  );
};

export default Item;
