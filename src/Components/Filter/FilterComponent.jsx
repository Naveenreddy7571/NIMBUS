import React from "react";
import "./FilterComponent.css";

function FilterComponent({ onSelectFilter }) {
  return (
    <div className="filter-component">
      <button onClick={() => onSelectFilter('recent')}>Recent Posts</button>
      <button onClick={() => onSelectFilter('trending')}>Trending Posts</button>
      <button onClick={() => onSelectFilter('AI')}>AI</button>
      <button onClick={() => onSelectFilter('DSA')}>DSA</button>
      <button onClick={() => onSelectFilter('Cloud')}>Cloud</button>
      <button onClick={() => onSelectFilter('Web Development')}>Web Development</button>
      <button onClick={() => onSelectFilter('ML')}>ML</button>
      <button onClick={() => onSelectFilter('Cybersecurity')}>Cybersecurity</button>
      <button onClick={() => onSelectFilter('Big Data')}>Big Data</button>
      <button onClick={() => onSelectFilter('DevOps')}>DevOps</button>
      <button onClick={() => onSelectFilter('DBMS')}>DBMS</button>
      <button onClick={() => onSelectFilter('Networking')}>Networking</button>
      <button onClick={() => onSelectFilter('College')}>College</button>
    </div>
  );
}

export default FilterComponent;
