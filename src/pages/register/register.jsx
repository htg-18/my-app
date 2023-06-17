import React from "react";
// import Topbar from "../../components/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./register.css"
export default function Register(){
   return(
    
        <>
       <div className="login">
         <div className="loginWrapper">
           <div className="loginLeft">
             {/* <h3 className="loginLogo">
                Mud Chat
             </h3> */}
             <img className="loginLogo" src="assets/logo.png"/>
             <span className="loginDesc">
                Connect with friends and world around on Mud Chat.
             </span>
           </div>
           <div className="loginRight">
               <div className="loginBox">
                  <input className="loginInput" placeholder="Username"/>
                  <input className="loginInput" placeholder="Email"/>
                  <input className="loginInput" placeholder="Password"/>
                  <input className="loginInput" placeholder="Password Again"/>
                  <button className="loginButton">Sign Up</button>
                  {/* <span className="forgotText">Forgot Password?</span> */}
                  <button className="loginRegisterButton">Log into Account</button>
               </div>
           </div>
         </div>
       </div>
        
        </>
   
   )
    
     
}