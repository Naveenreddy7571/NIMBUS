import React from 'react';
import './container.css';
import profile from '../../images/profile-pic.jpeg';
import followers from '../../images/ProfileImages/profile.png';

function Container() {
  return (
    <div>
    <div className="container">
      <div className="profile">
        <img src={profile} alt="profile" height="100px" width="100px" />
        <h1><b>Naveen Reddy</b></h1>
        <h3>Hard Working is the Key</h3>
      </div>
      <div className="follow">
        <div className="ps">
          <h5 style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center' }}>45</h5>
          <h>POSTS</h>
        </div>
        <div className="ps">
          <div className="followers-container">
            <img src={followers} alt="followers1" height="60px" width="60px" />
            <h>FOLLOWERS</h>
          </div>
        </div>
        <div className="ps">
          <div className="followers-container">
            <img src={followers} alt="followers2" height="60px" width="60px" />
            <h>FOLLOWING</h>
          </div>
        </div>
      </div>

      <button className="follow-button">EDIT PROFILE</button>
    
    </div>
    <hr />
    </div>
  );
}

export default Container;
