import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Fetch({
    uri,
    renderSuccess,
    loadingBackCall = () => (<div>Loading...</div>),
    renderError = (error) => (<pre>{error.message}</pre>)
}) {
    const { data, error, loading } = useFetch(uri);
    
    if (loading) return loadingBackCall();

    if (error) return renderError(error);

    if (data) return renderSuccess({ data });
}
