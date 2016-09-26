import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import WorkRecord from './tabs/WorkRecord.jsx'
import SideBar from './tabs/SideBar.jsx'
import Voters from './tabs/Voters.jsx'
import ApiDoc from './tabs/ApiDoc.jsx'

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
    value: 'ApiDoc'
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
  _onSwitchTab = () => {
    this.setState({
      value: this.props.value
    })
  }
  render() {
    return (
      <Tabs value={this.state.value} style={styles} >
        <Tab label="WorkRecord" value="WorkRecord" onClick={this._onSwitchTab}><WorkRecord /></Tab>
        <Tab label="Material" value="SideBar" onClick={this._onSwitchTab}><SideBar /></Tab>
        <Tab label="VoterDemo" value="Voters" onClick={this._onSwitchTab}><Voters /></Tab>
        <Tab label="API" value="ApiDoc" onClick={this._onSwitchTab}><ApiDoc /></Tab>
      </Tabs>
    )
  }
}