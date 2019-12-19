import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import AuthState from './context/auth/authState';
import ContactState from './context/contact/ContactState';
import AlertState from './context/alerts/AlertState';
import Alerts from './components/layout/Alerts';

import PrivateRoute from './components/routing/PrivateRoute';

import { API_URL } from './config';
import WakingUp from './components/layout/WakingUp';

const App = () => {
  const [loading, setLoading] = useState(true);

  fetch(`${API_URL}/login`).then(res => {
    if (res.ok) {
      return setLoading(false);
    }
    const msg = 'Something is went wrong with Heroku';
    alert(msg);
  });

  const content = () => {
    if (loading) {
      return <WakingUp />;
    } else
      return (
        <AuthState>
          <ContactState>
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
          </ContactState>
        </AuthState>
      );
  };
  return content();
};

export default App;
