import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotal, clearCart, removeItem } = useContext(Context);

  if (cart.length === 0) {
    return (
      <Flex direction ={'column'} align={'center'} justify={'center'}>
        <Heading ml={3} mt={3}>No hay productos agregados</Heading>
        <Heading mt={2} fontSize={20}>
        <Link to="/" >
          Ver productos
        </Link>
        </Heading>
      </Flex>
    );
  } else {
    return (
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Cantidad</Th>
              <Th>Precio</Th>
              <Th>Subtotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((producto) => (
              <Tr key={producto.id}>
                <Td>{producto.nombre}</Td>
                <Td>{producto.quantity}</Td>
                <Td>{producto.precio}</Td>
                <Td>{producto.precio * producto.quantity}</Td>
                <Td>
                  <Button onClick={() => removeItem(producto.id)}>
                    <MdDeleteOutline />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total de la compra: ${getTotal()}</Th>
              <Th>
                <Button onClick={() => clearCart()}>Vaciar carrito</Button>
              </Th>
              <Th>
                <Link to="/Checkout">Finalizar compra</Link>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  }
};

export default Cart;
