import React, { createContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getUserSession, isSessionActive } from '../pages/Pages';

export const SessionContext = createContext();

export default function SessionProvider({ children }) {
    if (!isSessionActive()) return <Redirect to='/login'/>

    return (
        <SessionContext.Provider value={{ username: getUserSession() }}>
            {children}
        </SessionContext.Provider>
    );
}
