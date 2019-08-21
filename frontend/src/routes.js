import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PetProfile from './pages/PetProfile';
import UserProfile from './pages/UserProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/petprofile" component={PetProfile} />
      <Route path="/userprofile" component={UserProfile} />
    </Switch>
  );
}
