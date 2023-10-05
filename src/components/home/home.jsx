import React, { useState } from "react";
import { Link } from "react-router-dom";
import slidimg from "../../assests/img/slider-img.png";
import imgmop from "../../assests/img/Mobile Phone.png"
import headphone from "../../assests/img/headphone.png"
import smartwatch from "../../assests/img/smart watch.png"
import cpu from "../../assests/img/tp6.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiRightArrow, BiSolidTruck } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import {FiPercent } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { BiSolidCartAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye ,AiOutlineClose } from "react-icons/ai";
import Homeproduct from "./homeproduct";
import "../home/home.css"
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillCaretDown } from "react-icons/ai";
const Home=({detail, view,close,setclose,addtocart})=>{
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    return(
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
            <div className="top-banner">

                <div className="container">
                    <div className="detail">
                        <h2>the best note books in 2023</h2>
                        <Link to="/product" className="link">Shop Now <HiOutlineArrowNarrowRight /></Link>
                        
                    </div>
                    <div className="img-box">
                            <img src={slidimg} alt="slider image" />
                        </div>
                </div>
            </div>

            <div className="product-type">
                <div className="container">
                    <div className="box">
                        <div className="img-box">
                            <img src={imgmop} alt="mobile" />
                        </div>

                        <div className="detail">
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={headphone} alt="head phone" />
                        </div>

                        <div className="detail">
                            <p>52 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={cpu} alt="cpu heat" />
                        </div>

                        <div className="detail">
                            <p>63 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={smartwatch} alt="smart watch" />
                        </div>

                        <div className="detail">
                            <p>18 products</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <BiSolidTruck />
                        </div>
                        <div className="detail">
                            <h3>free shipping</h3>
                            <p>Oder Above $1000</p>

                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurently</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FiPercent />
                        </div>
                        <div className="detail">
                            <h3>member Discount</h3>
                            <p>On Every Oder</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone />
                        </div>
                        <div className="detail">
                            <h3>customer support</h3>
                            <p>Every time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product">
                <h2>Top Products</h2>
                <div className="container">
                    {
                        Homeproduct.map((prod,index)=>{
                            return(
                                <>
                                    <div className="box" key={index}>

                                        <div className="img-box">
                                            <img src={prod.Img} alt={prod.Title} />

                                            <div className="icon">
                                                {
                                                    isAuthenticated?
                                                    <li onClick={()=>addtocart(prod)}><BiSolidCartAdd /></li>
                                                    :
                                                    <li onClick={()=>loginWithRedirect()}><BiSolidCartAdd /></li>

                                                }
                                                <li onClick={()=>addtocart(prod)}><BiSolidCartAdd /></li>
                                                <li onClick={()=>view(prod)}> <AiFillEye /></li>
                                                <li><AiOutlineHeart /></li>

                                            </div>
                                            
                                        </div>

                                        <div className="details">
                                            <p>{prod.Cat}</p>
                                            <h3>{prod.Title}</h3>
                                            <h4>${prod.Price}</h4>
                                        </div>

                                    </div>

                                </>
                            )
                        })
                    }
                    
                </div>
            </div>

            <div className="banner">

                <div className="container">

                    <div className="detail">
                    <h4>LATTEST TECHNOLOGY ADDED</h4>
                    <h3>Apple ipad  10.2 9th Gen - 2021</h3>
                    <p>$986</p>
                    <Link to="/product" className="link">Shop Now<HiOutlineArrowNarrowRight /></Link>
                </div>
                <div className="img-box">
                    <img src={slidimg} alt="" />
                </div>
                </div>
                
            </div>
        
        </>
    )
}
export default Home