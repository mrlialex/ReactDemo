import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';
import TestState from './TestState';
import TestEventForm from './TestEventForm';
import TestProps from './TestProps';
import TestLifeCycle from './TestLifeCycle';
import TestSemantic from './TestSemantic';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hello',
      content: 'This is my GF!',
      arr: ['I', 'am', 'your', 'farther']
    }
  }

  handleUnmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  }

  render() {
    return (
      <div className="content">
        <button onClick={this.handleUnmount.bind(this)}>Unmount</button>
        <TestProps msg={this.state.title}>hahaha</TestProps>
        <TestSemantic />
      </div>
    )
  }
};

export default HeaderComponent;