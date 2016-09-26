import React from 'react'
import { RaisedButton, TextField } from 'material-ui'

export default class ApiDoc extends React.Component {

  state = {
    json: '',
    userName: 'yeze322',
    repoName: 'MyNodeApi'
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
    req.open('GET', `https://api.github.com/repos/${this.state.userName}/${this.state.repoName}`)
    req.send(null)
  }

  _onInputUser = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  _onInputRepo = (event) => {
    this.setState({
      repoName: event.target.value
    })
  }

  _generateGitLink = () => {
    return `https://github.com/${this.state.userName}/${this.state.repoName}`
  }

  render() {
    let link = this._generateGitLink()
    return (
      <div>
        <div>
          <RaisedButton label="Fetch Github" primary={true} onClick={this._fetchGitAsync} />
          <br />
          <TextField
            hintText="Github User Name"
            floatingLabelText="UserName"
            value={this.state.userName}
            onChange={this._onInputUser}
          />
          <br />
          <TextField
            hintText="Github Repo Name"
            floatingLabelText="RepoName"
            value={this.state.repoName}
            onChange={this._onInputRepo}
          />
          <br />
          <br />
          <h1>Visit</h1>
          <a href={link} target='_blank'>{link}</a>
        </div>
        <div>
          {this.state.json}      
        </div>
      </div>
    )
  }
}