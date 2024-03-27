import React from 'react'

import './ItemCount.css'


const ItemCount = (stock, initialValue) => {

  const { count, incrementar, decrementar } = useCounter(stock, initialValue)
  
  return (
    <div className='counterContainer'>
        <button onClick={decrementar}>-</button>
        <h2>{count}</h2>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount