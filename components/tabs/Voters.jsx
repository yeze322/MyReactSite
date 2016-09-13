import React from 'react'
import { RaisedButton, FlatButton } from 'material-ui'

const style = {
  margin: 12
}

export default class Voters extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton label='Primary' style={style} />
        <RaisedButton label='Secondary' style={style} />
        <FlatButton label='Secondary' />
      </div>
    )
  }
}