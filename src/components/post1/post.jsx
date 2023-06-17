import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Users } from "../../dummyData";

export default function Post({post})
{ console.log(post);
  const [like,setLike]=useState(post.like)
  const [isLike,setIsLike]=useState(false)
  const likeHandler=()=>{
    setLike(isLike?like-1:like+1)
    setIsLike(isLike? false:true)
  }
    return ( 
         <div className="post">
           <div className="postWrapper">
             <div className="postTop">
               <div className="postTopLeft">
                  <img className="profileImg" src={Users.filter(u=>u.id==post.userId)[0].profilePicture}/>
                  <span className="postUserName">{Users.filter(u=>u.id==post.userId)[0].username}</span>
                  <span className="postDate">{post.date}</span>
               </div>
               <div className="postTopRight">
                 <FontAwesomeIcon  className="postItem" icon={faEllipsis} />
               </div>
             </div>
             <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img className="postImg" src={post.photo}/>
             </div>
             <div className="postBottom">
                  <div className="postBottomLeft">
                     <img className="likeIcon" src="/assets/like.png" onClick={likeHandler}/>
                     <img className="likeIcon" src="/assets/heart.png"  onClick={likeHandler}/>
                     <span className="postLikeCounter">{like} people like it</span>
                  </div>
                  <div className="postBottomRight">
                     <span className="postCommentText">{post.comment} comments</span>
                  </div>
             </div>
           </div>
        </div>
    )
       
    
}