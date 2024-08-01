import React, { useState, useEffect } from 'react';
import './DownContent.css';
import logo from '../../images/pro.png';

const initialRequestList = [
  { id: 1, name: 'Sreeram', profilePic: logo },
  { id: 2, name: 'Mahasai', profilePic: logo },
  { id: 3, name: 'Hari', profilePic: logo },
  { id: 4, name: 'Naveen', profilePic: logo },
  { id: 5, name: 'Naseer', profilePic: logo },
  { id: 6, name: 'Abdul', profilePic: logo },
];

function FriendRequest({ requestCount, onSetRequestCount }) {
  const [requests, setRequests] = useState(initialRequestList);

  useEffect(() => {
    onSetRequestCount(requests.length);
  }, [requests, onSetRequestCount]);

  const handleAccept = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleDelete = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="feed">
      <div className="card-container">
        {requests.map(request => (
          <div key={request.id} className="card">
            <img className="profile-pic" src={request.profilePic} alt="Profile Picture" />
            <div className="name">{request.name}</div>
            <div className="btn-container">
              <button className="btn accept" onClick={() => handleAccept(request.id)}>Accept</button>
              <button className="btn delete" onClick={() => handleDelete(request.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendRequest;
