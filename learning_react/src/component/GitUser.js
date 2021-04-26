import React from 'react';
import Fetch from '../component/Fetch';
import UserRepositories from '../component/UserRepositories';

export default function GitUser({ user }) {
    return (
        <Fetch 
            uri={`https://api.github.com/users/${user}`} 
            renderSuccess={UserDetails}
        />
    )
}

const UserDetails = ({ data }) => {
    return (
        <div>
            <img
                src={data.avatar_url}
                alt={data.login}
                width={80}
            />
            {`UserName: ${data.login} - ID: ${data.id}`}
        </div>
    )
}