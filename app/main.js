import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './main.css'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Mytab from '../components/common/Mytab.jsx'
import { WorkRecord, Material, Voters, ApiDoc, Login, TabUrlMap } from '../components/tabs'

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={Mytab}>
        <Route path={TabUrlMap.WorkRecord} component={WorkRecord} />
        <Route path={TabUrlMap.Material} component={Material} />
        <Route path={TabUrlMap.Voters} component={Voters} />
        <Route path={TabUrlMap.ApiDoc} component={ApiDoc} />
        <Route path={TabUrlMap.Login} component={Login} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('mytab')
);