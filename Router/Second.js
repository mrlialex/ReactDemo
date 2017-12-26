import React, { Component } from 'react';
import BasicComponent from '../utils/BasicComponent';

class Second extends BasicComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>我是组件2</h1>
      </div>
    )
  }
};

export default Second;