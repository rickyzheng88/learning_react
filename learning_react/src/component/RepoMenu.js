import React, { useEffect } from 'react';
import useIterator from '../hooks/useIterator';
import RepositoryReadme from '../component/RepositoryReadme';

export default function RepoMenu({
    repositories,
    selected,
    onSelect = f => f
}) {
    const [name, prev, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null
        );

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div>
            <div>{name.name}</div>
            <button onClick={prev}>&lt;</button>
            <button onClick={next}>&gt;</button>
        </div>
    );
}
