import { useState, useEffect } from 'react'

export default function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const setErrorStopLoading = (error) => {
            setError(error);
            setLoading(false);
        }

        if (!uri) return setErrorStopLoading('Fatal Error: Not valid URI');
        fetch(uri)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch((err) => setErrorStopLoading(err));
    }, [uri]);

    return {
        data,
        error,
        loading
    }
}
