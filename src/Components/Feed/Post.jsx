import React, { useCallback, useRef, useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PopUp from "../CommentPopup/PopUp.jsx";
import CommentContext from '../../CommentContext';
import { useContext } from "react";
 
function Post({ props, isPopupVisible, setIsPopupVisible }) {
  let currentdate = new Date();
  const { isCommentPopupVisible, setisCommentPopupVisible } = useContext(CommentContext);

  const [likes, setLikes] = useState(0);
  const LikeBtnDiv = useRef(null);

  const handleCommentClick = () => {
    setisCommentPopupVisible(true);
  };

  const handleCloseClick = () => {
    setisCommentPopupVisible(false);
  };

  const handlePostClick = () => {
    setisCommentPopupVisible(false);
  };

  const LikedPostFunction = useCallback(() => {
    if (LikeBtnDiv.current) {
      LikeBtnDiv.current.classList.toggle("liked");
      setLikes((prev) =>
        LikeBtnDiv.current.classList.contains("liked") ? prev + 1 : prev - 1
      );
    }
  })

  return (
    <div className="post-container" id="post-cnt">
      <h4>{props.title}</h4>
      <div className="post" id="post">
        <div className="post_head" id="post_head">
          <img src={props.img} alt="Profile" />
          <div className="post_header" id="post_header">
            <div className="post_headertext" id="headertext">
              <h3>{props.name}</h3>
              <h5>{currentdate.toLocaleString()}</h5>
            </div>
            <div className="post-options" id="post-opns">
              <button id="post-options-btn">
                <MoreVertIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="post_body" id="post_body">
          <div className="post_body_text" id="post_body_text">
            <p>{props.qns}</p>
          </div>
          {props.qnsImg && <img src={props.qnsImg} alt="Post" />}
          <div className="post_footer"  id="post_footer">
            <div className="likecomment" id="likecomment">
              <div className="like-button" id="like-button">
                <div className="heart-bg" id="heart-bg" onClick={LikedPostFunction}>
                  <div className="heart-icon" id="heart-icon" ref={LikeBtnDiv}></div>
                </div>
                <div className="likes-amount" id="likes-amount" >{likes}</div>
              </div>
              <button id="comment-btn" onClick={handleCommentClick}>
                <InsertCommentIcon />
              </button>
              <PopUp
                isVisible={isPopupVisible}
                onClose={handleCloseClick}
                onPost={handlePostClick}
              />
            </div>
            <button>
              <BookmarkBorderIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post