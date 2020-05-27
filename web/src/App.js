import React from 'react';
import SignUpPage from './signup';
import SignInPage from './signin';
import { Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
