import React from 'react'
import { RaisedButton, Toggle, TextField, Dialog } from 'material-ui'
import { orange500 } from 'material-ui/styles/colors'
import { apiHost } from '~/common'
import './MainPage.css'

export default class MainPage extends React.Component {
  state = {
    meal : false,
    dialogActived: false
  }
  _onCloseEvent = (eventName) => {
    const { revertEvent } = this.props
    let src = `http://${apiHost}/eventoff/hello`
    let req = new XMLHttpRequest()
    req.open('POST', src, false)
    req.withCredentials = true
    req.send(null)
    if(req.readyState == 4 && req.status == 200){
      revertEvent()
    }
  }
  _onOpenEvent = (eventName) => {
    const { revertEvent } = this.props
    let src = `http://${apiHost}/eventon/${eventName}`
    let req = new XMLHttpRequest()
    req.open('POST', src, false)
    req.withCredentials = true
    req.send(null)
    if(req.readyState == 4){
      switch (req.status) {
        case 200: // match success
          revertEvent()
          this.setState({
            dialogActived: true
          })
          console.log('Match Success')
          return
        case 201:
          revertEvent()
          break
        case 205:
          revertEvent()
          console.log('this shouldn.t happen!')
          break
      }
    } 
  }
  _onToggleMeal = () => {
    if (this.props.eventActived) {
      this._onCloseEvent('hello')
    } else {
      this._onOpenEvent('hello')
    }
  }
  _onDialogClose = () => {
    this.setState({
      dialogActived: false
    })
    this.props.revertEvent()
  }
  render () {
    const actions = [
      <RaisedButton
        label="OK"
        secondary={true}
        onTouchTap={this._onDialogClose}
      />
    ];
    return (
      <div className="MainPage">
        <Toggle
          label="Meal" style={{maxWidth: 200}}
          toggled={this.props.eventActived} onToggle={this._onToggleMeal}
        />
        <RaisedButton
          label="Log Out" secondary={true}
          onClick={this.props.onLogout}
        />
        {this.state.meal &&(
          <TextField hintText="Hello World!" hintStyle={{color: orange500}} />
          )}
        <Dialog
          title="Congratulations~"
          actions={actions}
          modal={false}
          open={this.state.dialogActived}
          onRequestClose={this._onDialogClose}
        >
          Match success!!!
        </Dialog>
      </div>
      )
  }
}