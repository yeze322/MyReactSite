import React from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add';
import { RaisedButton, FlatButton, FloatingActionButton, Toggle, Checkbox } from 'material-ui'

const style = {
  margin: 12
}

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    marginTop: 20,
    marginLeft: 20
  },
};

export default class Voters extends React.Component {

  state = {
    checked: true,
    toggleArray: [false, true, false],
    monitor: false
  }

  constructor (props) {
    super(props)
  }

  _onChangeChecked = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  _onChangeMonitor = () => {
    this.setState({
       toggleArray: this.state.toggleArray.map((x)=>!x),
    })
  }

  _revertArrayState = (i) => {
    this.setState({
      toggleArray: this.state.toggleArray.map((val, index) => index === i ? !val : val)
    })
  }

  render () {
    const { checked, toggleArray: tA } = this.state
    let rev = this._revertArrayState
    return (
      <div>
        <div className='button-window'>
          <RaisedButton label='Primary' primary={checked} style={style} />
          <RaisedButton label='Secondary' secondary={checked} style={style} />
          <FlatButton label='Secondary' />
          <FloatingActionButton mini={true} secondary={checked}>
            <ContentAdd />
          </FloatingActionButton>
          <Checkbox label="Enable Button Style" onCheck={this._onChangeChecked} checked={checked} />
        </div>
        <div style={styles.block}>
          <Toggle label="[A] Simple" toggled={tA[0]} onToggle={()=>rev(0)} style={styles.toggle} />
          <Toggle label="[B] Toggled by default" toggled={tA[1]} onToggle={()=>rev(1)} style={styles.toggle} />
          <Toggle label="[C] Disabled" toggled={tA[2]} disabled={true} onToggle={()=>rev(2)} style={styles.toggle} />
          <Toggle label="[MONITOR]" onToggle={this._onChangeMonitor} labelPosition="right" style={styles.toggle} />
        </div>
      </div>
    )
  }
}