import React from 'react';
import { Drawer, AppBar, MenuItem, RaisedButton } from 'material-ui';
import { FontIcon } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import './Login.css';
import myAvatar from './avatar.jpg';

export default class Login extends React.Component {
  _onClick1 = () => {
    document.getElementById('id01').style.display='block'
  }
  _onClick2 = () => {
    document.getElementById('id01').style.display='none'
  }
  render() {
    return (
      <div>
        <button onClick={this._onClick1}>Login</button>
        <div id="id01" className="modal">
          <span onClick={this._onClick2} 
        className="close" title="Close Modal">&times;</span>
          <form className="modal-content animate" action="action_page.php">
            <div className="imgcontainer">
              <img src={myAvatar} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <input type="checkbox" checked="checked" /> Remember me
            </div>

            <div className="container" style={{background:'#f1f1f1'}}>
              <button type="button" onClick={this._onClick2} className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      </div>      
    );
  }
}