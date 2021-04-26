import React, { useEffect, useState } from 'react';
import ReactMarkDown from 'react-markdown';

export default function RepositoryReadme({ repo, login }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(repo, login);
    }, [repo, login]);

    const loadReadme = async (repo, login) => {
        try {
            setLoading(true);
            const uri = `https://api.github.com/${login}/${repo}/readme`

            const { download_url } = await fetch(uri).then(res => res.json());
            const markdown = await fetch(download_url).then(res => res.text());
    
            setMarkdown(markdown);
            setLoading(false);
        } catch(err) {
            setError(err);
        }
    }

    if (error) return <pre>{error.message}</pre>

    if (loading) return <div>Loading...</div>

    return <ReactMarkDown children={markdown}/>
}
