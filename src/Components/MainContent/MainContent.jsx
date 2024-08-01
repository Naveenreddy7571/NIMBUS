import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../RightSideBar/RightSidebar";
import Feed from "../Feed/Feed";
import PostQuestion from "../PostQueston/PostQuestion";
import Profile from "../Profile/ProfileComponent";
import Search from "../../navigation/Search";
import AskQuestion from "../../navigation/AskQuestion";
import FriendRequest from "../FriendRequest/FriendRequest";
import Message from "../../navigation/Message";
import Settings from "../../navigation/Settings";
import HelpSupport from "../../navigation/Help";
import CommentContext from "../../CommentContext";
import PopUp from "../CommentPopup/PopUp";

function MainContent({ requestCount, onSetRequestCount, filter }) {
  const { isCommentPopupVisible } = useContext(CommentContext);
  const location = useLocation();

  const isFeedActive = location.pathname === "/";

  return (
    <div
      id="main-container"
      className={`App ${isCommentPopupVisible ? " activate-blur" : ""}`}
    >
      <div
        id="down-content"
        className={`down-content ${
          isFeedActive ? "feed-activated" : "feed-deactivated"
        }`}
      >
        <Sidebar />
        <div id="selected-component">
          <Routes>
            <Route path="/" element={<Feed filter={filter} />} />
            <Route path="/post-question" element={<PostQuestion />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route
              path="/notification"
              element={<FriendRequest onSetRequestCount={onSetRequestCount} />}
            />
            <Route path="/message" element={<Message />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </div>
        {isFeedActive && <RightSidebar />}
      </div>
      {isCommentPopupVisible && <PopUp />}
    </div>
  );
}

export default MainContent;
