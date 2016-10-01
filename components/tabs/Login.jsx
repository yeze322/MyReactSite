import React from 'react';
import { Link } from 'react-router'
import './Login.css';
import myAvater from './avatar.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div className="loginform">
        <form action="action_page.php">
          <div className="imgcontainer">
            <img src={myAvater} alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
                
            <button type="submit">Login</button>
          </div>

          <div className="container" style={{background: '#f1f1f1'}}>
            <button type="button" className="cancelbtn">Clear</button>
            <span className="psw">Forgot <a>password?</a></span>
          </div>
        </form>
        <Link to='/'>Home~</Link>
      </div>
    );
  }
}