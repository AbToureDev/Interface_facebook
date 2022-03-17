import React from 'react';
import './post.css'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

function Post() {
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="posttop">
                    <div className="posttopLeft">
                        <img className="postProfile" src={require('../assets/person/un.jpg')} alt=""/>
                        <span className="postUsername">Toure Aboubacar</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="posttopRight">
                        <MoreVertSharpIcon className="" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">it my first post</span>
                    <img className="postImg" src={require('../assets/post/1.jpg')} alt=""/>
                </div>
                <div className="postbottom">
                    <div className="postBottonLeft">
                        <img className="postLike" src={require('../assets/like.png')} alt=""/>
                        <img className="postLike" src={require('../assets/heart.png')} alt=""/>
                        <span className="postLikeCounter">32 people like</span>
                    </div>
                    <div className="postBottonRight">
                        <span className="postCommentText">10 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;