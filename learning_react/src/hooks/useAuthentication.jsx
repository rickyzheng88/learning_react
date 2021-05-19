import React, { useEffect, useState } from 'react';
import { getUserSession } from '../pages/Pages';

export default function useAuthentication() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (getUserSession()) {
            setAuthenticated(true);
            setUsername(getUserSession());
        }
    })

    return [isAuthenticated, username];
}
