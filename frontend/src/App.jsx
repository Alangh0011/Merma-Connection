import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home-page/Home';
import Actualizar from './Home-page/Actualizar';
import Agregar from './Home-page/Agregar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" component={Register} />
        <Route path="/home">
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/actualizar/:id" component={Actualizar} />
        <Route path="/agregar" component={Agregar} />
      </Switch>
    </Router>
  );
}

export default App;

