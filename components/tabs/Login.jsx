import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from './avatar.jpg'
import { TextField } from 'material-ui'

class LoginForm extends React.Component {
  state = {
    password: '',
    username: '',
  }

  formHandler = (fieldName) => {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      })
    }
  }
  loginBtnHandler = (evt) => {
    evt.preventDefault()
    let checked = this.state.username === 'yeze' && this.state.password === 'yeze'
    this.setState({
      username: '',
      password: '',
    })
    if(checked){
      this.props.onPassAuth()
    }
  }
  ajaxFetcher = () => {
    let src = 'http://yeze.eastasia.cloudapp.azure.com:8080/name'
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        console.log(req.responseText)
        if(req.responseText === this.state.username){
          this.props.onPassAuth()
        }
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
          <form onSubmit={this.loginBtnHandler}>
            <TextField type="username" id="username" value={this.state.username} hintText="UserName Field" floatingLabelText="UserName" fullWidth={true} onChange={this.formHandler("username")} />
            <TextField type="password" id="password" value={this.state.password} hintText="Password Field" floatingLabelText="Password" fullWidth={true} onChange={this.formHandler("password")} />
            {this.props.authpassed ? 'Authentication Success!' : 'Try Again...'}
            <button type="submit">Login</button>
          </form>
          <button onClick={this.ajaxFetcher}>AJAX Fetch</button>
        </div>
        <Link to='/'>Home~</Link>
      </div>
    );
  }
}

export default class Login extends React.Component {
  state = {
    authpassed: false
  }
  onPassAuth = () => {
    this.setState({
      authpassed: true
    })
  }
  onResetAuth = () => {
    this.setState({
      authpassed: false
    })
  }
  render() {
    const { authpassed } = this.state
    if(!authpassed){
      return <LoginForm authpassed={authpassed} onPassAuth={this.onPassAuth} />
    }else{
      return <div onClick={this.onResetAuth}>Hello world!</div>
    }
  }
}