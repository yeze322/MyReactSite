import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from './avatar.jpg'
import { TextField } from 'material-ui'

//var host = "localhost"
var host = "yeze.eastasia.cloudapp.azure.com"

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
  onLogin = () => {
    let src = `http://${host}:8080/login?name=${this.state.username}&pswd=${this.state.password}`
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        console.log('Login(): ', req.responseText)
        if(req.responseText === "true"){
          this.props.onPassAuth()
        }
      }
    }
    req.open('GET', src)
    req.withCredentials = true
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
          <button onClick={this.onLogin}>AJAX Fetch</button>
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
  componentDidMount = () => {
    this.checkCookie()
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
  checkCookie = () => {
    // make synchronous request
    let src = `http://${host}:8080/login`
    let req = new XMLHttpRequest()
    req.open('GET', src, false)
    req.withCredentials = true
    req.send(null)
    if(req.readyState == 4 && req.status == 200){
      if(req.responseText === "true"){
        console.log('Cookies loaded')
        this.onPassAuth()
      }
    }
  }
  onLogout = () => {
    let src = `http://${host}:8080/logout?name=${this.state.username}&pswd=${this.state.password}`
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        console.log('logout')
        this.onResetAuth()
      }
    }
    req.open('POST', src)
    req.withCredentials = true
    req.send(null)
  }
  render() {
    const { authpassed } = this.state
    if(!authpassed){
      return <LoginForm authpassed={authpassed} onPassAuth={this.onPassAuth} />
    }else{
      return <div onClick={this.onLogout}>Log Out</div>
    }
  }
}