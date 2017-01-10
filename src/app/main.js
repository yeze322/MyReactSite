import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './main.css'

import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { Mytab } from '~/components'
import reducer from '~/reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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
      require('~/containers/ApiDoc'),
      require('~/containers/Material'),
      require('~/containers/Voters'),
      require('~/containers/Waiting'),
      require('~/containers/WorkRecord')
    ]
  }]
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={rootRoute} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('mytab')
);