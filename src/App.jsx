import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";

function App() {
  const [requestCount, setRequestCount] = useState(0);
  const [filter, setFilter] = useState(""); // State to hold the filter value
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header 
        requestCount={requestCount} 
        onFilterSelect={setFilter} 
        onSearchSubmit={setSearchQuery} 
      />
      <Router>
        <MainContent
          requestCount={requestCount}
          onSetRequestCount={setRequestCount}
          filter={filter} // Pass the filter state to MainContent
          searchQuery={searchQuery} // Pass the search query state to MainContent
        />
      </Router>
    </>
  );
}

export default App;
