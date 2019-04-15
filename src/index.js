import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserShow from './components/UserShow.js'
import SignUp from './components/SignUp.js'


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path ='/' component={App} />
      <Route  path ='/show/:id' component={UserShow} />
      <Route   path ='/signup' component={SignUp} />
      <Route  path ='/user/:id/edit' component={UserShow} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

serviceWorker.unregister();
