import { useEffect, useState } from "react";
import { Box, Center, Heading, Flex } from "@chakra-ui/react";
import ItemList from "../itemList/ItemList";
import { getProducts, getProductsByCategory, productos} from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();



  useEffect(() => {
    setLoading(true);
    const getData = async() => {
      const queryRef = !categoryId ? collection(db, 'productos') : query(collection(db, 'productos'), where ('categoria', '==', categoryId))

      const response = await getDocs(queryRef)
      
      const products = response.docs.map((doc) => {
        const newObj = {
          ...doc.data(),
          id: doc.id
        }
        return newObj
      })
      setData(products)
      setLoading(false)
    }
    getData()
  }, [categoryId]);

  return (
    
      <Flex  direction={'column'} justify={'center'} align={'center'}  >
      {
        loading ?
        <Flex justify={'center'} align={'center'} >
          <Spinner
            mt={20}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            alignContent="center"
          />
        </Flex>
       : 
        <>
          <Heading>{categoryId}</Heading>
          <ItemList data={data} />
        </>
      }
      </Flex>
    
  );
};

export default ItemListContainer;
