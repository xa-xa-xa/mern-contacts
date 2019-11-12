import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/ContactState';
import AlertState from './context/alerts/AlertState';
import Alerts from './components/layout/Alerts';

import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  return (
    <ContactState>
      <AuthState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </AuthState>
    </ContactState>
  );
};

export default App;
