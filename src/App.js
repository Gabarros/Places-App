import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true}>
        <Users />
      </Route>
      <Route path="/places/new" exact={true}>
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Router>
  )
  
};

export default App;
