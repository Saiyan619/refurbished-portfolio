import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './assets/css/main.css'
import './assets/css/header.css'
import './assets/css/rest.css'
import HomePage from '../HomePage';
import Details from '../Details';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      {/* <Navigation />
      <hr /> */}
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.DETAILS} component={Details} />
    </div>
  </Router>
);
export default App;