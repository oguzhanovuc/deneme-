import React from 'react'
import Basketİtem from '../Basketİtem'
import Products from '../Products'

function Basket({basket , products}) {
  return (
    <div>
      {
        basket.map(item=>(
            <Basketİtem item={item} product={products.find(p=>p.id === item.id)} />
        ))
      }
    </div>
  )
}

export default Basket
