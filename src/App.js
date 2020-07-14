import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop.js'

import LoginPage from './pages/LoginPage';
import GroupListPage from './pages/GroupListPage';
import GroupPage from './pages/GroupPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route component={LoginPage} path={['/login', '/']} exact />
        <Route component={GroupListPage} path='/@:username' />
        <Route component={GroupPage} path='/@:username/:groupName' />
        <Redirect path="*" to="/login" />
      </Switch>
    </>
  );
}

export default App;
