import React, { useCallback, useState } from 'react';
import './App.css';
import ColorOrganizer from './component/ColorOrganizer';
import ColorProvider from './provider/ColorProvider';
import Checkbox from './component/Checkbox';
import User from './component/User';
import LotsCats from './component/LotsCats';
import GithubUser from './component/GithubUser';
import Virtualization from './component/Virtualization';
import List from './component/List';
import faker from 'faker';
import { FixedSizeList } from 'react-window';
import GitUser from './component/GitUser';
import RepoMenu from './component/RepoMenu';
import UserRepositories from './component/UserRepositories';
import RepositoryReadme from './component/RepositoryReadme';
import SearchForm from './component/SearchForm';

/**
 * <ColorProvider>
    <LotsCats/>
    <User/>
    <ColorOrganizer />
    <Checkbox/>
  </ColorProvider>
    <Virtualization/>
 */

function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = useCallback((login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  }, [login]);

  return (
    <>
    <SearchForm search={handleSearch} />
    {login && <GitUser user={login} />}
    {login && (
      <UserRepositories repo={repo} login={login} onSelect={setRepo} />
    )}
    {login && repo &&
      <RepositoryReadme login={login} repo={repo} />
    }
    </>
  )
}

export default App;
