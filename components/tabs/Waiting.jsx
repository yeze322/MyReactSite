import React from 'react';
import LoginForm from './Waiting/LoginForm.jsx'
import MainPage from './Waiting/MainPage.jsx'
import { apiHost } from '../common'

export default class Login extends React.Component {
  state = {
    authpassed: false,
    eventActived: false
  }
  resetState = () => {
    this.setState({
      authpassed: false,
      eventActived: false
    })
  }
  componentDidMount = () => {
    this.checkCookie()
  }
  onPassAuth = () => {
    this.setState({
      authpassed: true
    })
    this.checkEvent()
  }
  checkEvent = () => {
    let src = `http://${apiHost}/event/hello`
    let req = new XMLHttpRequest()
    req.open('GET', src, false)
    req.withCredentials = true
    req.send(null)
    if(req.readyState == 4 && req.status == 200){
      this.setState({
        eventActived: true
      })
    }
  }
  checkCookie = () => {
    // make synchronous request
    let src = `http://${apiHost}/login`
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
  onLogin = (username, password) => {
    return () => {
      let src = `http://${apiHost}/login?name=${username}&pswd=${password}`
      let req = new XMLHttpRequest()
      req.onreadystatechange = () => {
        if(req.readyState == 4 && req.status == 200){
          console.log('Login(): ', req.responseText)
          if(req.responseText === "true"){
            this.onPassAuth()
          }
        }
      }
      req.open('GET', src)
      req.withCredentials = true
      req.send(null)
    }
  }
  onLogout = () => {
    let src = `http://${apiHost}/logout?name=${this.state.username}&pswd=${this.state.password}`
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200){
        console.log('logout')
        this.resetState()
      }
    }
    req.open('POST', src)
    req.withCredentials = true
    req.send(null)
  }
  _revertEventState = () => {
    this.setState((prevState, props) => ({
      eventActived: !prevState.eventActived
    }))
  }
  render() {
    const { authpassed } = this.state
    if(!authpassed){
      return <LoginForm authpassed={authpassed} onPassAuth={this.onPassAuth} onLogin={this.onLogin} />
    }else{
      return <MainPage onLogout={this.onLogout} eventActived={this.state.eventActived} revertEvent={this._revertEventState} />
    }
  }
}