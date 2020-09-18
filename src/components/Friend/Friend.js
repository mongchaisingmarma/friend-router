import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    let history = useHistory();
    const {name, email, id} = props.friend;
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url);
    }
    const friendStyle = {
        border: "1px solid purple",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px"
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id : {id}</p>
            <p> 
                <Link to={`/friend/${id}`}>
                    <button>Show details of {id}</button>
                </Link>
            </p>
            <button onClick={() => handleClick(id)}>Click me</button>
            
        </div>
    );
};

export default Friend;