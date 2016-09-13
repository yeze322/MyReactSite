import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import WorkRecord from './tabs/WorkRecord.jsx'
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
    value: 'Voters'
  }

  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    console.log(this.state, value)
    this.setState({
      value: value
    })
  }
  _onSwitchTab = (value) => {
    this.setState({
      value: value
    })
  }
  render() {
    let _s = this._onSwitchTab
    return (
      <Tabs value={this.state.value} style={styles} >
        <Tab label="WorkRecord" value="WorkRecord" onClick={()=>_s('WorkRecord')}><WorkRecord /></Tab>
        <Tab label="Material" value="SideBar" onClick={()=>_s('SideBar')}><SideBar /></Tab>
        <Tab label="Voters" value="Voters" onClick={()=>_s('Voters')}><Voters /></Tab>
      </Tabs>
    )
  }
}