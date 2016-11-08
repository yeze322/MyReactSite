import React from 'react'
import { browserHistory } from 'react-router'
import { Tabs, Tab } from 'material-ui/Tabs'
import { TabUrlMap } from '../common'

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
          <Tab label="VoterDemo" value={TabUrlMap.Voters} />
          <Tab label="Waiting For You" value={TabUrlMap.WaitingForYou} />
          <Tab label="API" value={TabUrlMap.ApiDoc} />
        </Tabs>
        {this.props.children}
      </div>
    )
  }
}