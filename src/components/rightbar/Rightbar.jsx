import "./rightbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleDot, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Users } from "../../dummyData"
export default function Sidebar({profile})
{
  const HomeRightbar=()=>{
    return (
      <>
             <div className="birthdayContainer">
      <img className="birthdayImage" src="/assets/gift.png"/>
      <span className="birthdayText">
      <b>Pola Foster </b>and <b>3 others</b> have a birthday today..
      </span>
  </div>
   <img className="adImg" src="/assets/ad1.png"/>
   <h4 className="rightbarTitle">Online Friends</h4>
   <ul className="rightbarFriendList">
   {Users.map((u)=>(
    <li className="rightbarFriend">
        <div className="rightbarImageContainer">
          <img className="rightImg" src={u.profilePicture}/>
          {/* <span className="righbarOnline"></span> */}
          <FontAwesomeIcon  className="rightItem" icon={faCircleDot} />
        </div>
        <span className="rightbarUsername">{u.username}</span>
      </li>
        )) }
   
      
   </ul>
      </>
 
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
           <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">City:</span>
             <span className="rightbarInfoValue">New York</span>
           </div>
           <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">From:</span>
             <span className="rightbarInfoValue">Madrid</span>
           </div>
           <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">Relationship:</span>
             <span className="rightbarInfoValue">Single</span>
           </div>
        </div>
        <h4>User Friends</h4>
        <div className="userFollowings">
          <div className="userFollowing">
              <img src="assets/person/6.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
          <div className="userFollowing">
              <img src="assets/person/7.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
          <div className="userFollowing">
              <img src="assets/person/8.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
          <div className="userFollowing">
              <img src="assets/person/9.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
          <div className="userFollowing">
              <img src="assets/person/1.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
          <div className="userFollowing">
              <img src="assets/person/5.jpeg" className="userFollowingImg"/>
              <span className="userFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
    return ( 
         <div className="rightbar">
           <div className="rightbarWrapper">
              {profile? <ProfileRightbar/>:<HomeRightbar/>}
           </div>
        </div>
    )
       
    
}