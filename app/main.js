import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Mytab from '../components/Mytab.jsx'
import './main.css'

ReactDOM.render(
  <MuiThemeProvider>
    <Mytab />
  </MuiThemeProvider>,
  document.getElementById('mytab')
);