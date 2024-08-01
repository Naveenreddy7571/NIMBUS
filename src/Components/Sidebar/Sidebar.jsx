import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  ContactSupport as ContactSupportIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

function Sidebar() {
  const sideBarItemsList = [
    { icon: <HomeIcon />, name: "Feed", path: "/" },
    { icon: <ExploreIcon />, name: "Search", path: "/search" },
    { icon: <ContactSupportIcon />, name: "Ask Question", path: "/ask-question" },
    { icon: <NotificationsIcon />, name: "Notification", path: "/notification" },
    { icon: <MailIcon />, name: "Message", path: "/message" },
    { icon: <AccountCircleIcon />, name: "My Profile", path: "/profile" },
    { icon: <SettingsIcon />, name: "Settings", path: "/settings" },
    { icon: <HelpOutlineIcon />, name: "Help & Support", path: "/help-support" },
  ];

  return (
    <div id="sidebar" className="sidebar">
      {sideBarItemsList.map((value, index) => (
        <NavLink 
          to={value.path} 
          key={index}
          className={({ isActive }) => isActive ? 'sidebar-option active' : 'sidebar-option'}
        >
          {value.icon}
          <h2>{value.name}</h2>
        </NavLink>
      ))}
    </div>
  );
}

export default React.memo(Sidebar);
