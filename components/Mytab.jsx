import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import AntdHello from './tabs/AntdHello.jsx'
import SideBar from './tabs/SideBar.jsx'
import Voters from './tabs/Voters.jsx'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

export default class Mytab extends React.Component {
  state = {
    value: 'voter'
  }

  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Antd" value="timeline" ><AntdHello /></Tab>
        <Tab label="Material" value="sidebar"><SideBar /></Tab>
        <Tab label="Voters" value="voter"><Voters /></Tab>
      </Tabs>
    )
  }
}