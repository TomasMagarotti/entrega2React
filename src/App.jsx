import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NavBar from './components/navBar/NavBar'

import './App.css'
import ItemCount from './components/itemCount/ItemCount'





function App() {


  return (
    
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer title = 'Shop' />
      <ItemCount />
    </ChakraProvider>
   
  )
}

export default App
