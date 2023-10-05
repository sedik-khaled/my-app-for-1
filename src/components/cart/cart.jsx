import React from "react";
import "./cart.css"
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart=({cart,setcart})=> {
    //increase
    const incqty=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id
        })
        setcart(cart.map((value)=>{
            return value.id===product.id ?{...exist, qty:exist.qty + 1}:value
        }))
    }

    //decrease
    const desqty=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id
        })
        setcart(cart.map((value)=>{
            return value.id===product.id ?{...exist, qty:exist.qty - 1}:value
        }))
    }

    //remove cart product
    const removeproduct=(product)=>{     
        const exist=cart.find((x)=>{
            return x.id===product.id
        })
        if (exist.qty > 0) {
            setcart(cart.filter((x)=>{
                return x.id!==product.id
            }))
        }

    }

    //total price
    const total=cart.reduce((price, item)=> price+item.qty*item.Price,0)
    return (
        <>
            <div className="cart-container">
                {
                    cart.length===0&&
                    <div className="empty-cart">
                        <h2 className="empty">Cart is empty</h2>
                        <Link to="/product" className="cart-link">Shop Now</Link>
                    </div>
                    
                }
                <div className="content">
                    {
                        cart.map((value)=>{
                            return (
                                <div className="cart-item" key={value.id}>
                                    <div className="img-box">

                                            <img src={value.Img} alt={value.Title} />
                                    </div>
                                    <div className="detail">
                                        <div className="info">
                                        <h4>{value.Cat}</h4>
                                        <h3>{value.Title}</h3>
                                        <p>Price: ${value.Price}</p>
                                        <div className="qty"> <button className="incqty" onClick={()=>{
                                            incqty(value)
                                        }}>+</button>
                                        <input type="text" value={value.qty} />
                                        <button className="desqty" onClick={()=>{
                                            desqty(value)
                                        }}>-</button>
                                        </div>
                                        <h4 className="sup-total">sub total :${value.Price * value.qty}</h4>
                                        </div>
                                        <div className="close">

                                            <button onClick={()=>{
                                            removeproduct(value)
                                        }}><AiOutlineClose /></button>
                                        </div>
                                        
                                    </div>

                                 </div>
                            )
                        })
                    }
                    
                </div>
                <div className="final">
                     {
                    cart.length> 0 &&
                    <>
                    <div>

                        <h2 className="total-price">Total Price: ${total}</h2>
                    </div>
                    <div>
                         <button className="checkout">CheckOut</button>
                    </div>
                    
                   
                    </>
                }
                
                </div>
               
            </div>
        </>
    )
}
export default Cart
