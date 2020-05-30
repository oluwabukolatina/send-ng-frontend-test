import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Supply from './supply/Supply';
import Home from './home/Home';
import Request from './request/Request';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/supply" component={Supply} />
      <Route exact path="/request" component={Request} />
    </Switch>
  );
}

export default App;
