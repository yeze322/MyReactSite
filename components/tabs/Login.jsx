import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from './avatar.jpg'
import { TextField } from 'material-ui'

class LoginForm extends React.Component {
  state = {
    password: '',
    username: '',
    authpassed: false
  }

  formHandler = (fieldName) => {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      })
    }
  }
  loginBtnHandler = () => {
    let checked = this.state.username === 'yeze' && this.state.password === 'yeze'
    this.setState({
      username: '',
      password: '',
      authpassed: checked
    })
  }
  ajaxFetcher = () => {
    let src = 'http://yeze.eastasia.cloudapp.azure.com:8080/name'
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        this.setState({
          authpassed: req.responseText === this.state.username
        })
      }
    }
    req.open('GET', src)
    req.send(null)
  }
  render () {
    return (
      <div className="loginform">
        <div className="imgcontainer">
          <img src={myAvater} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <TextField id="username" value={this.state.username} hintText="UserName Field" floatingLabelText="UserName" fullWidth={true} onChange={this.formHandler("username")} />
          <TextField id="password" value={this.state.password} type="password" hintText="Password Field" floatingLabelText="Password" fullWidth={true} onChange={this.formHandler("password")} />
          {this.state.authpassed ? 'Authentication Success!' : 'Try Again...'}
          <button type="submit" onClick={this.loginBtnHandler}>Login</button>
          <button onClick={this.ajaxFetcher}>AJAX Fetch</button>
        </div>
        <Link to='/'>Home~</Link>
      </div>
    );
  }
}

export default class Login extends React.Component {
  render() {
    return <LoginForm />
  }
}