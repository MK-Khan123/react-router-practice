import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const friend = props.friend;
    let history = useHistory();
    
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    
    const { name, email, id } = friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <Link to={`/friend/${id}`}>
                <button>Show details</button>
            </Link> */}
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;