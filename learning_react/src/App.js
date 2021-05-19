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
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Contact,
    Error404

} from './pages/Pages';
import AboutRoutes from './routes/AboutRoutes';
import MainRoutes from './routes/MainRoutes';
import LoginRoutes from './routes/LoginRoutes';
import SessionProvider from './provider/SessionProvider';

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
    return (
        <Switch>
            <Route 
                exact 
                path='/'
                render={() => <Home/>}
            />
            <Route 
                path='/about'
                render={() => <AboutRoutes/>}
            />
            <Route 
                path='/contact'
                render={() => <Contact/>}
            />
            <SessionProvider>
                <Route 
                    path='/main'
                    render={() => (
                            <MainRoutes/>
                    )}
                />
                <Route 
                    path='/login'
                    render={() => (
                            <LoginRoutes/>
                    )}
                />
            </SessionProvider>
            <Route 
                path='*'
                render={() => <Error404/>}
            />
        </Switch>
    );
}

/*
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
*/
export default App;
