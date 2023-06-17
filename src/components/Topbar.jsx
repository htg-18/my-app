import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faBell,faNetworkWired,faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons'
import "./topbar.css"

export default function Topbar(){
   return (
    <div className="topbarComponent">
       <div className="topbarLeft">
           {/* <span className="logo">No Name</span>
           <FontAwesomeIcon icon={faNetworkWired} /> */}
           <img className="logoImage" src="assets/download__1_-removebg-preview.png"/>
       </div>
       <div className="topbarCenter">
       <FontAwesomeIcon  className="search" icon={faMagnifyingGlass} />
         <input placeholder="Search for posts,friends or videos" className="searchInputs"/>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
             <span className="topbarLink">Homepage</span>
        </div>
        <div className="topbarLinks">
             <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
         <div className="topbarIconItem">
            <FontAwesomeIcon className="trIcons" icon={faUser} />
            <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItem">
            <FontAwesomeIcon className="trIcons" icon={faComment} />
            <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItem">
            <FontAwesomeIcon className="trIcons" icon={faBell} />
            <span className="topbarIconBadge">1</span>
         </div>
        </div>
        <img src="/assets/person/1.jpeg" className="topbarImage"/>
       </div>
    </div>
   ) 

}