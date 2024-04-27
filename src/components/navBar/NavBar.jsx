import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Box,
  
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <img
          src="./src/assets/logo-proyecto.jpeg"
          style={{ width: "90px" }}
          alt="logo de la marca"
        />
      </div>
    
      <Heading className="nav"><Link to='/'>Tienda</Link> </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"/category/Remeras"}>Remeras</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/category/Pantalones"}>Pantalones</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/category/Camperas"}>Camperas</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/category/Zapatillas"}>Zapatillas</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
   
  );
};

export default NavBar;
