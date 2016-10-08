import React from 'react'
import { browserHistory } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs'
import { TabUrlMap } from '../tabs'

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
    currentTab: TabUrlMap.ApiDoc
  }

  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    this.setState({
      currentTab: value
    })
    browserHistory.push(`${value}`)
  }

  render() {
    return (
      <div>
        <Tabs value={this.props.location.pathname} style={styles} onChange={this.handleChange}>
          <Tab label="WorkRecord" value={TabUrlMap.WorkRecord} />
          <Tab label="Material" value={TabUrlMap.Material} />
          <Tab label="VoterDemo" value={TabUrlMap.Voters} />
          <Tab label="API" value={TabUrlMap.ApiDoc} />
          <Tab label="Login" value={TabUrlMap.Login} />
        </Tabs>
        {this.props.children}
      </div>
    )
  }
}