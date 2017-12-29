import React, { Component } from 'react';
import BasicComponent from '../utils/BasicComponent';

class Third extends BasicComponent {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>我是动态ID</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    )
  }
};

export default Third;