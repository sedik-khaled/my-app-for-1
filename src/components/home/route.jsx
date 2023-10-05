import React from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./home";
import Product from "../product/product";
import Cart from "../cart/cart";
import Contact from "../contact/contact";
const Rout=({product,setproduct , detail,view,close,setclose,cart,setcart,addtocart})=>{
    return(
    <>
        <Routes>
            <Route path="/" element={<Home product={product} setproduct={setproduct} detail={detail} view={view} close={close} setclose={setclose} addtocart={addtocart}/>}/>
            <Route  path='/cart' element={<Cart cart={cart} setcart={setcart}/>}/>
            <Route  path='/Contact' element={<Contact />}/>
            <Route  path='/product' element={<Product product={product } setproduct={setproduct} detail={detail} view={view} close={close} cart={cart} setclose={setclose} addtocart={addtocart}/>}/>
        </Routes>
    
    </>
    )
}

export default Rout