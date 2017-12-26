import React, { Component } from 'react';
import BasicComponent from '../utils/BasicComponent';

class Home extends BasicComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>我是首页君，嘿嘿</h1>
      </div>
    )
  }
};

export default Home;