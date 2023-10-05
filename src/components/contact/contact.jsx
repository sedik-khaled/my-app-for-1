import React from "react";
import { useState } from "react";
import "./contact.css"
import { useAuth0 } from "@auth0/auth0-react";
const Contact=()=>{
    const { loginWithRedirect,logout,user, isAuthenticated, } = useAuth0();
    const [users, setuser]=useState(
        {
            Name:"" , Email:"",Subject:"",Messaage:""
        }
    )
    let name , value
    const data=(e)=>{
        name=e.target.name
        value=e.target.value
        setuser({...users, [name]:value})
    }
    const sentdata=async (e)=>{
        const{ Name , Email,Subject,Messaage}=users
        e.preventDefault();
        const options={
            method:"POST",
            headers:{
                "Content-Type" : "aplication/json"
            },
            body: JSON.stringify({
                Name , Email,Subject,Messaage
            })
        }
        const res=await fetch("https://e-commerce-contact-1348c-default-rtdb.firebaseio.com/Message.json",options)
        console.log(res)
        if(res){
            alert("Your Message Sent")
        }else {
            alert("An Error Occured")
        }
    }
    return(
        <div className="contact-container">
            <div className="content">
                <h2># Contact Us</h2>
                <div className="form">
                    <form method="POST">
                        <input type="text" name="Name" value={users.Name} placeholder="ENTER YOUR FULL NAME" required autoComplete="off" onChange={data}/>
                        <input type="email" name="Email" value={users.Email} placeholder="ENTER YOUR EMAIL" required autoComplete="off" onChange={data}/>
                        <input type="text" name="Subject" value={users.Subject} placeholder="ENTER YOUR SUPJECT" required autoComplete="off" onChange={data}/>
                        <textarea name="Messaage" value={users.Messaage} placeholder="ENTER YOUR MESSAGE" required autoComplete="off" onChange={data}></textarea>
                        {
                            isAuthenticated?
                            <button type="submit" onClick={sentdata}>Send</button>
                            :
                            <button type="submit" onClick={()=>loginWithRedirect()}>Login To Send Your Message</button>
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact