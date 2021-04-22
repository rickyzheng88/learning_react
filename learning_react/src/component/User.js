import React, { useReducer } from 'react'

const firstUser = {
    id: "0391-3233-3201",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@mtnwilsons.com",
    admin: false
}

export default function User() {
    const [user, setToUser] = useReducer(
        (user, newDetails) => 
            ({...user, ...newDetails}), 
        firstUser
        );

    return (
        <div>
            <h2>{user.id}</h2>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{`City: ${user.city} - State: ${user.state}`}</p>
            <p>{`Email: ${user.email}`}</p>
            <strong>{user.admin ? 'Admin' : 'User'}</strong>
            <button onClick={() => setToUser({admin: true})}>
                Make Admin
            </button>
        </div>
    )
}
