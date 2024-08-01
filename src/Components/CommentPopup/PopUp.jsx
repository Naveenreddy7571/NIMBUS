import React from 'react';
import './PopUp.css';
import CommentContext from '../../CommentContext.jsx';
import { useContext } from "react";

function PopUp() {
  const { isCommentPopupVisible, setisCommentPopupVisible } = useContext(CommentContext);
  if (!isCommentPopupVisible) return null;
  function onClose()
  {
    setisCommentPopupVisible(false);
  }
  return (

    <div id="comment-popup" >
      <div className="comment-header">
        <h2>Give Suggestion</h2>
        <button id="comment-close-btn"  onClick={onClose}>×</button>
      </div>
      <div className="comment-body">
        <textarea
          id="comment-text"
          placeholder="Give Your Suggestion here Mentor...."
        ></textarea>
      </div>
      <div className="comment-footer">
        <button id="comment-post-btn" onClick={onClose}>Post</button>
      </div>
    </div>
  );
}

export default React.memo(PopUp);
