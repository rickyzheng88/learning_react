import React, { useState, useEffect } from 'react'

const loadJSON = key =>
    key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data));

export default function GithubUser({ login }) {
    const [data, setData] = useState(loadJSON(`user:${login}`));

    // load the new data in localStorage if there isn't one, or if the login doesn't
    // match to the login in the LocalStorage
    useEffect(() => {
        if (!data) return;
        if (data.login === login) return;
        const { name, avatar_url, location } = data;
        saveJSON(`user:${login}`, {
            name,
            avatar_url,
            location,
            login
        });
    }, [data]);

    useEffect(() => {
        if (!login) return;
        if (data && data.login === login) return;
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (data) {
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    }

    return null;
}
