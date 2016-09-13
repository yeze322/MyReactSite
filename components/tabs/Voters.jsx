import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 12
}

export default class Voters extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton label='Primary' primary={true} style={style} />
        <RaisedButton label='Secondary' secondary={true} style={style} />
        <FlatButton label='Secondary' />
        <FloatingActionButton mini={true} secondary={true}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}