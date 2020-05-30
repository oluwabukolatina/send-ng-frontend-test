import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Supply from './supply/Supply';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/supply" component={Supply} />
    </Switch>
  );
}

export default App;
