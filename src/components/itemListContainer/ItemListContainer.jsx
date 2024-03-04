import { Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({title}) => {
  return (
    <div>
      <Heading> {title} </Heading>
    </div>
  )
}

export default ItemListContainer
