import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports dos Containers
import Home from './containers/Home';
import PetProfile from './containers/PetProfile';
import UserProfile from './containers/UserProfile';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/petprofile/:id" component={PetProfile} />
      <Route path="/userprofile/" component={UserProfile} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}
