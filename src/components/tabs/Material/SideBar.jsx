import React from 'react';
import { Drawer, AppBar, MenuItem, RaisedButton } from 'material-ui';
import { FontIcon } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <FlatButton
          label="GitHub Link"
          href="https://github.com/callemall/material-ui"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="Tabs" onClick={this.handleToggle}/>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}