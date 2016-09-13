import React from 'react';
import { Button } from 'antd';
import WorkRecord from './WorkRecord'

import 'antd/dist/antd.css'
import './AntdHello.css'

export default class AntdHello extends React.Component {
  render() {
    return (
      <div className="tabwindow">
        <Button type="primary" size="large">Primary</Button>
        <h1>Hello world</h1>
        <div className="workrecord">
          <WorkRecord />
        </div>
      </div>
    );
  }
}