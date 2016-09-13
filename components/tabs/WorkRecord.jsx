import React from 'react'
import { List, ListItem } from 'material-ui'
import ContentSend from 'material-ui/svg-icons/content/send';

const styles = {
  width: 300
}

export default class WorkRecord extends React.Component {
  render() {
      return (
        <List style={styles}>
            <ListItem primaryText="Use Material.Tab 2016-09-13" leftIcon={<ContentSend />} />
            <ListItem primaryText="Deploy Material-UI" leftIcon={<ContentSend />} />
            <ListItem primaryText="Deploy Ant Design" leftIcon={<ContentSend />} />
            <ListItem primaryText="Deploy Webpack" leftIcon={<ContentSend />} />
        </List>
      )
  }
}