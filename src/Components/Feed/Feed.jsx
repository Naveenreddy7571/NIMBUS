import React, { useEffect, useRef, useState } from 'react';
import Post from './Post';
import Postsarray from './PostsArr.js';
import PostQuestion from '../PostQueston/PostQuestion.jsx';
import RightSidebar from '../RightSideBar/RightSidebar.jsx';
import './Feed.css';

function Feed({ filter, searchQuery }) {
  const [posts, setPosts] = useState(Postsarray);
  const [size, setSize] = useState(6);
  const feedRef = useRef(null);

  useEffect(() => {
    setPosts(prevPosts => [...prevPosts, ...Postsarray]);
  }, [size]);

  const filterPosts = (posts, filter, searchQuery) => {
    let filteredPosts = [...posts];
    if (searchQuery) {
      filteredPosts = filteredPosts.filter(post => post.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    switch (filter) {
      case 'recent':
        filteredPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'trending':
        filteredPosts = filteredPosts.sort((a, b) => b.likes - a.likes);
        break;
      default:
        if (filter) {
          filteredPosts = filteredPosts.filter(post => post.category.toLowerCase() === filter.toLowerCase());
        }
    }
    return filteredPosts;
  };

  const filteredPosts = filterPosts(posts, filter, searchQuery);

  return (
    <div id="feed" className='feed' ref={feedRef}>
      <PostQuestion />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((dataItem, index) => (
          <Post
            props={dataItem}
            key={index}
          />
        ))
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}

export default Feed;
