// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import OnlineTestAssessment from './components/OnlineTestAssessment';
import './styles/bootstrap.scss';
import './styles/custom.scss';
import './index.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/OnlineTestAssessment" component={OnlineTestAssessment} />
      </Switch>
    </Router>
  );
}

export default App;
