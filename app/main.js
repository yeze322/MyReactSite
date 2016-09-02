import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Hello from '../components/antdsample.jsx';
import SideBar from '../components/SideBar.jsx';

import './main.css'

ReactDOM.render(<Hello />, document.getElementById('app'));

const MaterialApp = () => (
  <MuiThemeProvider>
    <SideBar />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MaterialApp />,
  document.getElementById('material')
);