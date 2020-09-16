import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import LandingPage from './Components/LandingPage/LandingPage';
import CreateSurvey from './Components/CreateSurvey/CreateSurvey';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" height="80px" />
      <br />
      <br />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/create" component={CreateSurvey} />
      </Switch>
    </div>
  );
}

export default App;
