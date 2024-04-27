import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './CartWidget.css'
import { Box, Flex, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import Context from '../../context/CartContext'

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Flex mr={2} justify={"center"} align = {"center"} className='cartWidgetContainer '>
      <Link to='/cart'><FaCartShopping className = 'cartWidget' /></Link>
      <Text className="cartQuantity">{getQuantity()}</Text>
    </Flex>
  )
}

export default CartWidget
