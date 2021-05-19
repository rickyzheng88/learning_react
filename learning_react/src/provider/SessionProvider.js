import React, { createContext, useEffect, useState } from 'react';
import { getUserSession } from '../pages/Pages';
import useAuthentication from '../hooks/useAuthentication';

export const SessionContext = createContext();

export default function SessionProvider({ children }) {
    const [isAuthenticated, username] = useAuthentication();

    return (
        <SessionContext.Provider value={{ 
            isAuthenticated,
            username
        }}>
            {children}
        </SessionContext.Provider>
    );
}
