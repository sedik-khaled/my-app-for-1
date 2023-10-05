import React from "react";
import Logo from "../../assests/img/logo.svg"
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import "./footer.css"

const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="about">
                        <div className="logo">
                            <img src={Logo
                            } alt="Logo" />
                        </div>
                        <div className="detail">
                            <p>We are a team of designers and developers that create high quality WordPress</p>
                            <div className="icons">
                                <li><BsFacebook /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><AiFillYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className="account">
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className="page">
                        <h3>pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terma & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Footer