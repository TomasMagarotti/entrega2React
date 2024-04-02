import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'

import './App.css'
import ItemCount from './components/itemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'





function App() {


  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title= 'Shop'/>} />
          <Route path='/category/:categoryId' element ={<ItemListContainer title= 'Shop'/>} />
          <Route path= '/product/:productId' element = {<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App
