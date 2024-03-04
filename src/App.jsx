import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


function App() {


  return (
    <>
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer title = 'Shop' />
    </ChakraProvider>
    </>
  )
}

export default App
