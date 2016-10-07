import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from './avatar.jpg'
import { TextField } from 'material-ui'

class LoginForm extends React.Component {
  state = {
    password: '',
    username: '',
    authpassed: 'false'
  }

  formHandler = (fieldName) => {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      })
    }
  }

  loginBtnHandler = () => {
    let authPassed = this.state.username === 'yeze' && this.state.password === 'yeze'
    this.setState({
      username: '',
      password: '',
      authpassed: authPassed
    })
  }
  render () {
    return (
      <div className="loginform">
        <div className="imgcontainer">
          <img src={myAvater} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <TextField value={this.state.username} hintText="UserName Field" floatingLabelText="UserName" fullWidth={true} onChange={this.formHandler("username")} />
          <TextField value={this.state.password} type="password" hintText="Password Field" floatingLabelText="Password" fullWidth={true} onChange={this.formHandler("password")} />
          {this.state.authpassed ? 'true' : 'false'}
          <button onClick={this.loginBtnHandler}>Login</button>
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