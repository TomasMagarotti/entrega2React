import React, { useContext, useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
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
import Item from "../item/Item";
import Context from "../../context/CartContext"


const ItemDetail = ({ categoria, descripcion, image, nombre, precio, stock, id }) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    const onAdd = (quantity) => {

      const item = {
        id,
        stock,
        nombre,
        precio
      }
      addItem(item, quantity)
      setCantidad(quantity)
    }


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
        <Text>Stock disponible: {stock} </Text>
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
      {
        cantidad > 0 ?
        <Link to='/cart'>Ir al carrito</Link> :
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
      }
    </Card>
  );
};

export default ItemDetail;
