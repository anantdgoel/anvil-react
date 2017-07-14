import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Profile from './components/Profile';
import OtherMembers from './components/OtherMembers';
import Events from './components/Events';
import Dashboard from './components/Dashboard';



injectTapEventPlugin();



/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


ReactDOM.render((
   <HashRouter>

      <App>
        <Route exact path="/" component={Dashboard} />
        <Route path="/Profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/Events" component={Events} />
        <Route path="/OtherMembers" component={OtherMembers} />
      </App>

   </HashRouter>
), document.getElementById( 'root' ) )
