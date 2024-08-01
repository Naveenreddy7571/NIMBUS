import React, { useState } from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";
import FilterComponent from "./FilterComponent";
import Postsarray from "./Postsarray";
import profile from "../../images/profile-pic.jpeg";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSearchQuery("");
  };

  const filteredPosts = Postsarray.filter((post) => {
    const matchesName = post.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter ? post.category === selectedFilter : true;
    return matchesName && matchesFilter;
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      setRecentSearches([...recentSearches, searchQuery]);
    }
  };

  return (
    <div className="feed_header">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <TextField
          variant="outlined"
          placeholder={`Search by name${selectedFilter ? ` in ${selectedFilter}` : ""}`}
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
        />
      </form>
      {searchQuery && (
        <div className="recent-searches">
          <div className="dropdown-title">Recent Searches</div>
          <List>
            {recentSearches.slice(-5).map((search, index) => (
              <ListItem key={index}>
                <ListItemText primary={search} />
              </ListItem>
            ))}
          </List>
          <div className="dropdown-divider"></div>
          <FilterComponent onSelectFilter={handleFilterChange} />
        </div>
      )}
      {filteredPosts.map((post, index) => (
        <div key={index} className="post">
          <img src={post.img} alt={post.name} />
          <h3>{post.name}</h3>
          <p>{post.qns}</p>
          <img src={post.qnsImg} alt={post.qns} />
          <p>Category: {post.category}</p>
          <p>Date: {new Date(post.date).toLocaleDateString()}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBarComponent;
