import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Rutas from './LandingPage/Rutas';  // Ensure the import name matches the component
import Appl from './User/App'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          {isLoggedIn ? <Appl /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          <Rutas />
        </Route>
        {/* Optional: Handle unmatched routes */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
