import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Heading,
  Flex
  
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router";



const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    reapetedEmail: "",
    phone: "",
  });

  const [ emailMatch, setEmailMatch ] = useState(true)
  const { cart, getTotal} = useContext(Context)


  const updateUser = (event) => {
    setUser((user) => ({
        ...user,
        [event.target.name]: event.target.value
    }))
  }
const navigate = useNavigate()
  
  const validateEmails = () => {
    if(user.email === user.reapetedEmail) {
        setEmailMatch(true)
    } else {
        setEmailMatch(false)
    }
  }


  const getOrder = async () => {
    validateEmails()
    if(emailMatch){
      const queryRef = collection (db, 'orders')
      try {
        const order = {
        buyer: user,
        cart: cart,
        total: getTotal()

      }
      const orderDocRef = await addDoc(queryRef, order)
      const orderId = orderDocRef.id 
      Swal.fire({
        title: "Finalizado !",
        text: "Compra realizada exitosamente",
        icon: "success"
      }).then(() => {
        clearCart()
        navigate('/')
      });
      
    } catch (error) {
      console.log(error)

    }
  }
}
  return (
    <>
    <Flex alignContent={'center'} justifyContent={'center'}>
      <Heading mr={2} alignContent={'center'}>
        Resumen de compra
      </Heading>
      <Heading>
        ${getTotal()}
      </Heading>
    </Flex>
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type='text' name='nameUser' onChange={updateUser} />
      <Input type='email' name='email'  onChange={updateUser} />
      <Input type='email' name='reapetedEmail'  onChange={updateUser} />
      <Input type='text' name='phone' onChange={updateUser} />
      <Button onClick={getOrder}>Finalizar compra</Button>



      <FormHelperText></FormHelperText>
    </FormControl>
    </>
  );
};

export default Checkout;
