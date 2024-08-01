import React from 'react';
import './rightsidebar.css';
import profilePic from '../../images/profile-pic.jpeg';
import postImage from '../../images/post2.avif';

import RecommendIcon from '@mui/icons-material/Recommend';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function RightSidebar() {
    let names = [
    { name: "Abdul", userid: "abc@123" },
    { name: "Maha sai", userid: "mahasai@123" },
    { name: "Naveen", userid: "naveen@123" }
    ]
    let currentdate = new Date();

    return (
        <div>
            <div className="right_sidebar">
                <div className="Question-of-the-day">
                    <h2>Question of the day</h2>
                    <div className="question-of-the-day-post">
                        <div className="question-of-the-day-post_avatar">
                            <img src={profilePic} alt="Profile" />

                            <div className="question-of-the-day-post_headertext">
                                <h3>Naveen Reddy</h3>
                                <h5>{currentdate.toLocaleString()}</h5>
                            </div>
                        </div>

                        <div className="question-of-the-day-post_body">
                            <div className="question-of-the-day-post_header"></div>

                            <div className="question-of-the-day-post_body_text">
                                <p>
                                    I am currently in second year what should I practice DSA or
                                    Development
                                </p>
                            </div>

                            <img src={postImage} alt="Post" />

                            <div className="question-of-the-day-post_footer">
                                <div className="likecomment">
                                    <button id="like-btn">
                                        <RecommendIcon />
                                    </button>
                                    <button>
                                        <InsertCommentIcon />
                                    </button>
                                </div>

                                <button>
                                    <BookmarkBorderIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="similar-skills">
                    <h2>People With Similar Skills</h2>
                    <div className="peoples">
                        {names.map((names, index) => (
                            <div className="person" key={index}>
                                <img src={profilePic} alt="Profile" />
                                <div className="details">
                                    <h3>{names.name}</h3>
                                    {/* <p className="ids" >{names.userid}</p> */}
                                </div>
                                <button>Follow</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(RightSidebar);
