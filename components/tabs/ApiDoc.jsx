import React from 'react'
import { RaisedButton } from 'material-ui'

export default class ApiDoc extends React.Component {

  state = {
    json: ''
  }

  _fetchGit = () => {
    var req = new XMLHttpRequest()
    req.open('GET', 'https://api.github.com/users/yeze322/repos', false)
    req.send(null)
    this.setState({
      json: req.responseText
    })
  }

  _fetchGitAsync = () => {
    var req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        this.setState({
          json: req.responseText
        })
      }
    }
    req.open('GET', 'https://api.github.com/users/yeze322/repos')
    req.send(null)
  }

  render() {
    return (
      <div>
        <RaisedButton label="Fetch Github" primary={true} onClick={this._fetchGitAsync} />
        <h2>Github Link</h2>
        <p>https://github.com/yeze322/MyNodeApi.git</p>
        {this.state.json}
      </div>
    )
  }
}