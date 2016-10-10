import React from 'react'
import { RaisedButton, Toggle, TextField } from 'material-ui'
import { orange500 } from 'material-ui/styles/colors'
import './MainPage.css'

export default class MainPage extends React.Component {
  state = {
    meal : false
  }
  _onToggleMeal = () => {
    this.setState({
      meal: !this.state.meal
    })
  }
  render () {
    return (
      <div className="MainPage">
        <Toggle
          label="Meal" style={{maxWidth: 200}}
          toggled={this.state.meal} onToggle={this._onToggleMeal}
        />
        <RaisedButton
          label="Log Out" secondary={true}
          onClick={this.props.onLogout}
        />
        {this.state.meal &&(
          <TextField hintText="Hello World!" hintStyle={{color: orange500}} />
          )}
      </div>
      )
  }
}