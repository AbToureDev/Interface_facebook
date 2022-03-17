import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import './Share.css'
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';


export default function Share() {
     return(
         <div className="share">
             <div className="shareWrapper">
                 <div className="shareTop">
                     <img className="shareProfileImg" src={require('../assets/person/3.jpg')} alt=""/>
                     <input type="text" className="shareInput" placeholder="Quel est ton mind safak"/>
                 </div>
                 <hr className="shareHr"/>
                 <div className="shareBotton">
                     <div className="ShareOptions">
                         <div className="shareOption">
                             <MovieSharpIcon htmlColor="tomato" className="shareIcon"/>
                             <span className="shareOptionText"> Photo or video</span>
                         </div>
                         <div className="shareOption">
                             <LocalOfferSharpIcon htmlColor="blue" className="shareIcon"/>
                             <span className="shareOptionText">Tag</span>
                         </div>
                         <div className="shareOption">
                             <FmdGoodSharpIcon htmlColor="green" className="shareIcon"/>
                             <span className="shareOptionText">Location</span>
                         </div>
                         <div className="shareOption">
                             <InsertEmoticonSharpIcon htmlColor="gold" className="shareIcon"/>
                             <span className="shareOptionText">Feeling</span>
                         </div>
                     </div>
                     <button className="shareButton">Share</button>
                 </div>
             </div>
     </div>)
 }