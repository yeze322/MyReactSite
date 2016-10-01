import React from 'react'
import { browserHistory } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs'

import WorkRecord from './tabs/WorkRecord.jsx'
import SideBar from './tabs/SideBar.jsx'
import Voters from './tabs/Voters.jsx'
import ApiDoc from './tabs/ApiDoc.jsx'
import Login from './tabs/Login.jsx'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

const tabNameMap = {
  WorkRecord : "WorkRecord",
  Material : "Material",
  Voters : "Voters",
  ApiDoc : "ApiDoc",
  Login : "Login"
}

export default class Mytab extends React.Component {
  state = {
    currentTab: 'ApiDoc'
  }

  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    this.setState({
      currentTab: value
    })
    browserHistory.push(`/${value}`)
  }

  render() {
    let tabName = this.props.params.tabName
    return (
      <div>
        <Tabs value={tabNameMap[tabName] === undefined ? this.state.currentTab : tabName} style={styles} onChange={this.handleChange}>
          <Tab label="WorkRecord" value={tabNameMap.WorkRecord}><WorkRecord /></Tab>
          <Tab label="Material" value={tabNameMap.Material}><SideBar /></Tab>
          <Tab label="VoterDemo" value={tabNameMap.Voters}><Voters /></Tab>
          <Tab label="API" value={tabNameMap.ApiDoc}><ApiDoc /></Tab>
          <Tab label="Login" value={tabNameMap.Login}><Login /></Tab>
        </Tabs>
        {this.props.children}
      </div>
    )
  }
}