import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import AntdHello from './AntdHello.jsx';
import SideBar from './SideBar.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Mytab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Antd" value="a" >
          <div>
            <AntdHello />
          </div>
        </Tab>
        <Tab label="Material" value="b">
          <div>
            <SideBar />
          </div>
        </Tab>
      </Tabs>
    );
  }
}