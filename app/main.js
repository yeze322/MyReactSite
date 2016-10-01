import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Mytab from '../components/Mytab.jsx'
import './main.css'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Login from '../components/tabs/Login.jsx'

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={Mytab} />
      <Route path='/hidden' component={Login} />
      <Route path='/:tabName' component={Mytab} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('mytab')
);