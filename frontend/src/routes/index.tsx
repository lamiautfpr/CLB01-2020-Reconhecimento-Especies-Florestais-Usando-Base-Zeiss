import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import MainClassification from '../pages/Main_classification';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/classification" exact component={MainClassification} />
    </Switch>
  );
};
export default Routes;
