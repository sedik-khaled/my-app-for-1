
import './App.css';
import Footer from './components/footer/footer';
import Nav from './components/nav/Nav';
import productdetail from './components/product/productdetail';
import React , { useState } from 'react';
import Rout from './components/home/route';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [product , setproduct]=useState(productdetail)  
  //add to cart
  const[cart , setcart]=useState([])
  const exist=cart.find((x)=>{
          return (
            x.id===product.id
          )
          
        })

  const addtocart=(product)=>{  
      if(exist) {
         alert("This Is Already Add To Cart")
      }
      else {
        setcart([...cart, {...product, qty:1}])
        alert("Is Added To Cart")
      }
  }

  //product details
  const[close , setclose]=useState(false)
  const[detail, setdetail]=useState([])
  //filter product

  const searchbtn=(product)=>{

        const change=productdetail.filter((x)=>{
            return x.Cat===product  
        })
        setproduct(change)
    }

    //product detail
    
    const view=(product)=>{
      setdetail([{...product}])
      setclose(true)
    }
  
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      
        
        {/* <Route path='/' element={<Home />} />
        <Route product={product} setproduct={setproduct} path='/product' element={<Product />}/> */}
        <Rout product={product} setproduct={setproduct} detail={detail} view={view} close={close} setclose={setclose} cart={cart} setcart={setcart} addtocart={addtocart}/>
        

      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
