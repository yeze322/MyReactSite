import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './main.css'

import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import { Mytab } from '~/components/views'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: Mytab,
    onEnter: (route, replace) => {
      if (route.location.pathname === '/') {
        replace(null, '/Waiting')
      }
    },
    childRoutes: [
      require('~/components/tabs/ApiDoc'),
      require('~/components/tabs/Material'),
      require('~/components/tabs/Voters'),
      require('~/components/tabs/Waiting'),
      require('~/components/tabs/WorkRecord')
    ]
  }]
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={rootRoute} />
  </MuiThemeProvider>,
  document.getElementById('mytab')
);