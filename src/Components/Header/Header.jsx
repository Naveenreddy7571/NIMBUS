import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import profile from "../../images/profile-pic.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterComponent from "../Filter/FilterComponent";
import { Paper, List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import './Header.css';

function Header({ requestCount, onFilterSelect, onSearchSubmit }) {
  const [isProfileDropDownActivated, setisProfileDropDownActivated] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      onSearchSubmit(searchValue);
      setRecentSearches((prevSearches) => [searchValue, ...prevSearches.filter((search) => search !== searchValue).slice(0, 4)]);
      setSearchValue("");
      setIsFilterVisible(false);
    }
  };

  const handleSearchClick = () => {
    setIsFilterVisible(true);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSearchValue("");
    onFilterSelect(filter);
  };

  return (
    <div>
      <div className="header" id="header">
        <div className="logo" id="logo">
          <img src={Logo} alt="Logo" />
          <h2>Mentor Me</h2>
        </div>

        <div className="feed_header" id="feed_header">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder={`Search by name${selectedFilter ? ` in ${selectedFilter}` : ""}`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={handleSearchClick}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          {isFilterVisible && (
            <Paper className="recent-searches">
              <List>
                <Typography variant="subtitle1" className="dropdown-title">Recent Searches</Typography>
                {recentSearches.map((search, index) => (
                  <ListItem key={index} button onClick={() => setSearchValue(search)}>
                    <ListItemText primary={search} />
                  </ListItem>
                ))}
                <Divider className="dropdown-divider" />
                <Typography variant="subtitle1" className="dropdown-title">Categories</Typography>
                <FilterComponent
                  onSelectFilter={handleFilterChange}
                />
              </List>
            </Paper>
          )}
        </div>

        <div className="header_items">
          <button>
            <ChatBubbleIcon />
          </button>

          <button id="cnt-btn">
            <Badge badgeContent={requestCount} color="error">
              <NotificationsIcon />
            </Badge>
          </button>

          <button>
            <FavoriteIcon />
          </button>
          <button
            id="arrow_drop_down"
            onClick={(event) => {
              event.stopPropagation();
              setisProfileDropDownActivated((prev) => !prev);
            }}
          >
            <ArrowDropDownIcon />
          </button>
          <button id="myButton">
            <img src={profile} alt="Profile" />
          </button>

          <div
            className={"profile-drop-down-menu" + (isProfileDropDownActivated ? " open-menu" : "")}
            id="profile_menu"
          >
            <div className="profile-menu">
              <div className="user-info">
                <img src={profile} alt="User" />
                <h3>Naveen Reddy</h3>
              </div>
              <hr />
              <div className="profile-items">
                <a href="#" className="sub-menu-link">
                  <AccountCircleIcon />
                  <h3>Edit Profile</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <SettingsIcon />
                  <h3>Settings</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <ContactSupportIcon />
                  <h3>Help and Support</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <LogoutIcon />
                  <h3>Logout</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
