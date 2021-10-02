import React from 'react';
import { Switch, Route} from 'react-router-dom'

import { Dasboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const Routes: React.FC = () => {
  // o + significa que é só um parametro
  return (
    <Switch>
        <Route component={Dasboard} exact path="/" />
        <Route component={Repo} exact path="/repositories/:repository+" />
    </Switch>
  );
}