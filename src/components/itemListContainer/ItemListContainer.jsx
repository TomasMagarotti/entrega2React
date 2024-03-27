import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import ItemList from "../itemList/ItemList";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((el) => setData(el))
        .catch((error) => console.log(error));
    } else {
      getProducts()
        .then((el) => setData(el))
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  return (
    <div>
      <Heading>{title}</Heading>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
