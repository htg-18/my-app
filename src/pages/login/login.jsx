import React from "react";
// import Topbar from "../../components/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./login.css"
export default function Login(){
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
                  <input className="loginInput" placeholder="Email"/>
                  <input className="loginInput" placeholder="Password"/>
                  <button className="loginButton">Log In</button>
                  <span className="forgotText">Forgot Password?</span>
                  <button className="loginRegisterButton">Create a New Account</button>
               </div>
           </div>
         </div>
       </div>
        
        </>
   
   )
    
     
}