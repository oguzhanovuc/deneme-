import './App.css';
import Header from './components/Header';
import {useState , useEffect  } from "react";
import products from "./Products.json";
import Products from "./Products";
import Basket from "./components/Basket"



function App() {

  const [money , setMoney] = useState(100)
  const [basket , setBasket] = useState([])
  const [total , setTotal] = useState()

  const resetBasket = () => {
    setBasket ([])
  }

  useEffect(()=>{
     setTotal(
      basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(products => products.id === item.id).Price))
    } , 0 ), 
    )   
    
}, [basket])

  return (   
    <div>
      <Header total={total} money={money}/> 
      <div className='contianer products'>
      {products.map(products=>(
      <Products key={products.id} total={total}  money={money} basket={basket} setBasket={setBasket} products={products} />))}
       <Basket products={products} basket={basket} />
       </div> 
        <button className='sepet' onClick={resetBasket}>sepeti boşalt</button>
    </div>
    
    

  );
}

export default App;
