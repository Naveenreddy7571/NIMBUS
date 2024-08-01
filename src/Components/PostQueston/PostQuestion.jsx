import React from 'react';
import profile from '../../images/profile-pic.jpeg';
import './PostQuestion.css';

function PostQuestion() {
    return (
        <div className="questionbox" id="questionbox">
            <form>
                <div className="questionbox__input" id="questionbox__input">
                    <img src={profile} alt="Profile" />
                    <input id="post-Question" type="text" placeholder="Post Your Question" />
                </div>
                <button id="but" className="questionbox__questionButton">Post Qn</button>
            </form>
        </div>
    );
}

export default PostQuestion;
