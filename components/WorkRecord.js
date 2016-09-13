import { Timeline } from 'antd';
import React from 'react'

export default class WorkRecord extends React.Component {
  render() {
      return (
        <Timeline>
            <Timeline.Item color="green">Use Material.Tab 2016-09-13</Timeline.Item>
            <Timeline.Item color="red">
            <p>Deploy Material-UI</p>
            <p>Deploy Ant Design</p>
            <p>Deploy Webpack</p>
            </Timeline.Item>
        </Timeline>
      )
  }
}