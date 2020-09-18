import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setfriend] = useState({})
    useEffect(() => {
      const url =`https://jsonplaceholder.typicode.com/users/${friendId}` 
      fetch(url)
      .then(res => res.json())
      .then(data => setfriend(data))
    }, [])
    return (
        <div>
            <p>This is friend details component: {friendId}</p>
            <h3>{friend.name}</h3>
            <h5>Email: {friend.email}</h5>
            <h6>Website:{friend.website}</h6>
        </div>
    );
};

export default FriendDetail;