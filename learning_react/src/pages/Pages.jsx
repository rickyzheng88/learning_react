import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import useSession from '../hooks/useSession';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const getUserSession = () => {
    return sessionStorage.getItem('username');
}

const isSessionActive = () => {
    return sessionStorage.length > 0;
}

const Home = () => {
    return (
        <div>
            <h1>Welcome to the home page</h1>
            { 
                getUserSession() ? 
                <button
                    onClick={() => {
                        sessionStorage.clear();
                        <Redirect to="/login"/>
                    }}
                >
                    Logout
                </button> : ""
            }
            <Nav>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='main'>Main</Link>
                <Link to='fucking'>Error</Link>
                <Link to='login'>Login</Link>
            </Nav>
        </div>
    );
};

const About = () => {
    return(
        <div>
            [About Page]
            <Link to='/'>Home</Link>
            <Link to={`about/services`}>Services</Link>
        </div>
    );
};

const Contact = () => {
    return (
        <div>
            [Contact Page]
            <Link to='/'>Home</Link>
        </div>
    );
};

const Main = () => {
    if (!isSessionActive()) {
        return (
            <div>
                <Redirect to='/login'/>
            </div>
        )
    }

    return (
        <div>
            [Main Page]
            <Link to='/'>Home</Link>
            <Link to='/main/profile'>See your profile!</Link>
            Welcome back!!!
        </div>
    );
};

const Error404 = () => {
    return(
        <div>
            <h2>Error 404</h2>
            <Link to='/'>Return to Home Page</Link>
        </div>
    )
}

const Container = (content) => {
    return (
        <div>
            {content}
        </div>
    );
}

const Services = () => Container('Services Page');

const Login = () => {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");

    const changeUser = (e) => setInput(e.target.value);

    const setSession = (user) => {
        sessionStorage.setItem('username', user);
    }

    if (getUserSession()) {
        return (
            <div>
                <Redirect to='main'/>
            </div>
        )
    }

    return (
        <div>
            <h2>Please Enter username to login</h2>
            <div 
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100px'
                    }
                }
            >
                <input 
                    value={input} 
                    type="text" 
                    onChange={changeUser} 
                    placeholder=''
                />
                <button 
                    onClick={() => {
                        setUsername(input);
                        setSession(input);
                    }}
                >
                    Login
                </button>
                { getUserSession() || username || 'Login' }
            </div>
            
        </div>
    )
}

const Profile = () => {
    const { username } = useSession();

    return(
        <h2>This is your profile, {username}</h2>
    );
}

export {
    Home,
    About,
    Contact,
    Main,
    Error404,
    Services,
    Login,
    getUserSession,
    isSessionActive,
    Profile
}