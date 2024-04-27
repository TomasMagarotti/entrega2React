import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  
    const [ product, setProduct ] = useState({})
    const [loading, setLoading] = useState(true);

    const  { productId } = useParams()

    useEffect (() => {
        const getProduct = async() => {
          const queryRef = doc(db, 'productos', productId)
          const response = await getDoc(queryRef)

          const newItem = {
            ...response.data(),
            id: response.id
          }
          setProduct(newItem)
          setLoading(false)
        }
        getProduct()
    },[])
    
  return (
    <div>
       {loading ? 
        <Box display="flex" alignItems="center" justifyContent="center" mt="5rem" >
          <Spinner
            
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            alignContent="center"
          />
        </Box>
         : 
          <>
        <ItemDetail {...product} /> 
        </>
        }
    </div>
  )
}

export default ItemDetailContainer