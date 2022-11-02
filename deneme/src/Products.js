import React from 'react'

function Products({products, basket , setBasket, total , money}) {

  const basketİtem = basket.find(item => item.id === products.id)

  const addBasket=() => {
    const checkBasket = basket.find(item=> item.id===products.id)
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== products.id), checkBasket])
      
    }
    else {
      setBasket([...basket,{
        id:products.id,
        amount: 1
   } ])
  }
}

    const removeBasket = () => {
      const currrentBasket = basket.find(item => item.id === products.id)
      const basketWithountCurrent = basket.filter(item => item.id !== products.id)
      currrentBasket.amount -= 1
      
          if (currrentBasket.amount === 0) {
          setBasket([...basketWithountCurrent])      
        }else setBasket([...basketWithountCurrent , currrentBasket ])   
        
      }

    

  return (

    <>
    <div className="products">
      <img src={products.image} alt="" />
      <h6>{products.title}</h6>
        <div className='Price'>{products.Price}$</div>
        <div className='actions'>
            <button className='sell-btn' disabled={!basketİtem} onClick={removeBasket}>Sat</button>
            <span className='amount'>{basketİtem && basketİtem.amount || 0}</span>
            <button className='buy-btn renk' disabled={total + products.Price > money } onClick={addBasket}>Satın al</button>
           
        </div>
        <style jsx>{`
            .products {
                padding: 2px ;
                background : #fff ;
                border : 10px solid #ddd;
                margin-bottom : 10px;
                float:left;
                
                
                
            }
            
              .products img{
                
                width:100px;
                height: 100px"

               .products h6{
                font-size:20px;
                margin-bottom:10px;
                
               }  

               .products .actions{
                display :flex
               }
              
               

              

              }
            
        `}
        </style>
      
    </div>
   </> 
  )
}

export default  Products ;
