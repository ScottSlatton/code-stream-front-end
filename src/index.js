import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserShow from './components/UserShow.js'
import Login from './components/Login.js'


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path ='/' component={Home} />
      <Route  path ='/show/:id' component={UserShow} />
      <Route  path ='/user/:id/edit' component={UserShow} />
      <Route   path ='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

serviceWorker.unregister();
