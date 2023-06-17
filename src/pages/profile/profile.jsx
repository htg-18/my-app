import "./profile.css"
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile()
{
   return(
    
        <>
          {/* <Topbar/> */}
          <Topbar/>
         <div className="profile">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileDiv">
                  <img className="profileCover" src="/assets/post/3.jpeg"/>
                 <img className="profileUserImage" src="/assets/person/3.jpeg"/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Harsh Shah</h4>
                    <span className="profileDesc">Hello Friends!</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed/>
               <Rightbar profile/>
              </div>
              
            </div>
            
         </div>
        
        </>
   
   )
    
     
}