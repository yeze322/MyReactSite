import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from '~/static/avatar.jpg'
import { TextField } from 'material-ui'

export default class LoginForm extends React.Component {
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
          <button onClick={this.props.onLogin(this.state.username, this.state.password)}>AJAX Fetch</button>
        </div>
        <Link to='/'>Home~</Link>
      </div>
    );
  }
}
