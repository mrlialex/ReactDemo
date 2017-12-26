import React, { Component } from 'react';
import BasicComponent from '../utils/BasicComponent';

class First extends BasicComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>我是组件1</h1>
      </div>
    )
  }
};

export default First;