import React from "react";
import productdetail from "./productdetail";
import { BiSolidCartAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./product.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
// import { useState } from "react";


const Product=({product , setproduct , detail, view,close,setclose,addtocart})=>{
    const { loginWithRedirect,isAuthenticated } = useAuth0();


    const filterproduct=(product)=>{
        const update=productdetail.filter((x)=>{
            return x.Cat===product;
        })
        setproduct(update)

    }
    const allproducts=()=>{
        setproduct(productdetail)
    }
    return (
        <>
        
           {
            close?
            <div className="product-detail">
            <div className="container">
                <button onClick={()=> setclose(false)} className="close-btn"><AiOutlineClose /></button>
                {
                    detail.map((value, index)=>{
                        return (
                            <div className="product-box" key={index}>
                                <div className="img-box">
                                    <img src={value.Img } alt={value.title} />
                                </div>
                                <div className="detail">
                                    <h4>{value.Cat}</h4>
                                    <h2>{value.Title}</h2>
                                    <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                                    <h3>${value.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                </div>
                        )
                    })
                }
                
            </div>
           </div>:null
           }
            <div className="products">
            <h2># Product</h2>
            <p>Home . products</p>
                <div className="container">
                    <div className="filter">
                        <div className="catagories">
                            <h3>catagories</h3>
                            <ul>
                            <li onClick={()=>{allproducts()}}>All Products</li>
                                <li onClick={()=>{filterproduct("Tablet")}}>Tablet</li>
                                <li onClick={()=>{filterproduct("Smart Watch")}}>Smart Watch</li>
                                <li onClick={()=>{filterproduct("Headphone")}}>Headphone</li>
                                <li onClick={()=>{filterproduct("Camera")}}>Camera</li>
                                <li onClick={()=>{filterproduct("Gaming")}}>Gaming</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="productbox">
                            <div className="contant">
                                {
                                    product.map((value,index)=>{
                                         return (
                                            <>
                                                <div className="box" key={index}>
                                                <div className="img-box">
                                            <img src={value.Img} alt={value.Title} />

                                            <div className="icon">
                                                {
                                                    isAuthenticated ?  <li onClick={()=>addtocart(value)}> <BiSolidCartAdd /> </li>
                                                    :
                                                    <li onClick={()=>loginWithRedirect()}> <BiSolidCartAdd /> </li>
                                                }
                                              
                                                <li onClick={()=>view(value)}> <AiFillEye /></li>
                                                <li><AiOutlineHeart /></li>

                                            </div>
                                            
                                        </div>

                                        <div className="details">
                                            <p>{value.Cat}</p>
                                            <h3>{value.Title}</h3>
                                            <h4>${value.Price}</h4>
                                        </div>
                                                </div>
                                            </>
                                         )
                                    })
                                }
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Product