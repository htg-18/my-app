import "./share.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts, faFaceSmile, faFaceSmileBeam, faFaceSmileWink, faLocationDot, faPhotoFilm, faTag, faTags} from '@fortawesome/free-solid-svg-icons'
export default function Share()
{
    return ( 
         <div className="share">
           <div className="shareWrapper">
               <div className="shareTop">
                 <img className="shareProfileImg" src="/assets/person/1.jpeg"/>
                 <input  placeholder="what's on your mind" className="shareInput"/>
               </div>
               <hr className="shareHr"/>
               <div className="shareBottom">
                 <div className="shareOptions">
                     <div className="shareOption">
                      <FontAwesomeIcon  className="shareItem1 shareItem" icon={faPhotoFilm} />
                       <span className="shareOptionText">Photos or Videos</span>
                     </div>
                     <div className="shareOption">
                      <FontAwesomeIcon className="shareItem2 shareItem" icon={faTags} />
                       <span className="shareOptionText">Tags</span>
                     </div>
                     <div className="shareOption">
                      <FontAwesomeIcon className="shareItem3 shareItem" icon={faLocationDot} />
                       <span className="shareOptionText">Locations</span>
                     </div>
                     <div className="shareOption">
                      <FontAwesomeIcon className="shareItem4 shareItem" icon={faFaceSmile} />
                       <span className="shareOptionText">Feelings</span>
                     </div>
                 </div>
                 <button className="shareButton">Share</button>
               </div>
           </div>
        </div>
    )
       
    
}