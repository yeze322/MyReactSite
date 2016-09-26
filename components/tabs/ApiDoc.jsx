import React from 'react'
import { LinearProgress, FlatButton, TextField } from 'material-ui'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

export default class ApiDoc extends React.Component {

  state = {
    userJson: '[]',
    repoJson: '[]',
    userName: 'yeze322',
    repoName: 'MyNodeApi',
    currentDataSoure: ''
  }

  _fetchRepoAsync = () => {
    var req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        this.setState({
          repoJson: req.responseText,
          currentDataSoure: 'repo'
        })
      }
    }
    req.open('GET', `https://api.github.com/repos/${this.state.userName}/${this.state.repoName}`)
    req.send(null)
  }

  _fetchUserAsync = () => {
    var req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        this.setState({
          userJson: req.responseText,
          currentDataSoure: 'user'
        })
      }
    }
    req.open('GET', `https://api.github.com/users/${this.state.userName}/repos`)
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
    let repoData = JSON.parse(this.state.userJson).map((obj)=>{
      return {
        id: obj.id,
        name: obj.name,
        full_name: obj.full_name,
        url: obj.clone_url
      }
    })
    return (
      <div>
        <div>
          <FlatButton label="Fetch Repo" primary={true} onClick={this._fetchRepoAsync} />
          <FlatButton label="Fetch User" secondary={true} onClick={this._fetchUserAsync} />
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
          {this.state.repoJson}
        </div>
        <LinearProgress mode="determinate" value={100}/>
        <div>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Full Name</TableHeaderColumn>
                <TableHeaderColumn>Url</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {repoData.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.id}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.full_name}</TableRowColumn>
                    <TableRowColumn><a href={row.url} target='_about'>Github</a></TableRowColumn>
                  </TableRow>
                  ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}