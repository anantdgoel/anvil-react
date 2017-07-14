import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import OtherMembers from './components/OtherMembers';
import Events from './components/Events';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';
import NotFound from './components/partials/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/Profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Events" component={Events} />
    <Route path="/OtherMembers" component={OtherMembers} />
    <Route path='/login' component={Login} />
    <Route path='/resetpassword' component={ResetPassword} />
    <Route path='/signup' component={SignUp} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
