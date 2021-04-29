import React from 'react';
import RepoMenu from '../component/RepoMenu';
import Fetch from '../component/Fetch';

export default function UserRepositories({ login, repo, onSelect = (f) => f }) {
	return (
		<Fetch
			uri={`https://api.github.com/users/${login}/repos`}
			renderSuccess={({ data }) => {
				return (
					<RepoMenu
						repo={repo}
						repositories={data}
						onSelect={onSelect}
					/>
				);
			}}
		/>
	);
}
