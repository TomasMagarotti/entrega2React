import React, { useState } from 'react'
import { Button, Heading } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = () => {
    const [ count, setCount] = useState (1)

const incrementar = () => {
    setCount(count + 1)
} 
const decrementar = () => {
    setCount(count - 1)
}

  return (
    <div>
        <Button onClick={decrementar}>-</Button>
        <Heading>{count}</Heading>
        <Button onClick={incrementar}>+</Button>
    </div>
  )
}

export default ItemCount