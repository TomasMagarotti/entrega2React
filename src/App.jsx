import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'

import './App.css'
import ItemCount from './components/itemCount/ItemCount'





function App() {


  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title= 'Shop'/>} />
          <Route path='/category/:categoryId' element ={<ItemListContainer title= 'Shop'/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App
