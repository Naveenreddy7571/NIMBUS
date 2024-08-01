import React from "react";
import Feed from "./Components/Feed/Feed";
import Search from "./navigation/Search";
import AskQuestion from "./navigation/AskQuestion";
import Message from "./navigation/Message";
import SettingsPage from "./navigation/Settings";
import Help from "./navigation/Help";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import FriendRequest from "./Components/FriendRequest/FriendRequest"
const renderComponent = (selectedComponent) => {
  switch (selectedComponent) {
    case "Feed":
      return <Feed />;
    case "Search":
      return <Search />;
    case "Ask Question":
      return <AskQuestion />;
    case "Notification":
      return <FriendRequest />;
    case "Message":
      return <Message />;
    case "My Profile":
      return <ProfileComponent />;
    case "Settings":
      return <SettingsPage />;
    case "Help & Support":
      return <Help />;
    default:
      return <Feed />;
  }
};

export default renderComponent;
