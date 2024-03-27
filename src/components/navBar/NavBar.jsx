import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading} from '@chakra-ui/react'
import { AiFillCaretDown } from "react-icons/ai";
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src="./src/assets/logo-proyecto.jpeg" style={ {width : "90px" }} alt="logo de la marca" />
        </div>
    <Menu>
    <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
      Productos
    </MenuButton>
    <MenuList>
      <MenuItem>Remeras</MenuItem>
      <MenuItem>Pantalones</MenuItem>
      <MenuItem>Camperas</MenuItem>
      <MenuItem>Zapatillas</MenuItem>
      </MenuList>
  </Menu>
  <CartWidget/>
  </div>
  )
}

export default NavBar
