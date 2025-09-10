import React from 'react'

export default function Demo({products}) {
  return (
    <div> 
    
    { products.map((product,i) => {  
      <p>
      {product.pid} </p> 
      {product.pname}
      {product.price}
    })
  }

    </div>
  )
}
