import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
      <FaCartShopping className = "cartWidget" /><span>3</span>

    </div>
  )
}

export default CartWidget
