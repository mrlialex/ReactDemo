import React, {Component} from 'react';
import BasicComponet from '../utils/BasicComponent';

import {Transition} from 'react-transition-group';

const duration = 300;
const durationGroup = 500;

const defaultStyles = {
  transition: `all ${duration}ms ease-in-out`,
  padding: '20px',
  display: 'inline-block',
  background: '#ccc'
};

const transtitionStyles = {
  entering: {transform: 'translateX(-100%)'},
  entered: {transform: 'translateX(0)'},
  exited: {transform: 'translateX(-100%)'}
};

class TransitionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.in);
    this.setState({
      in: !this.state.in
    });
  }

  render() {
    return (
      <div>
        <button className="ui default button" onClick={this.handleClick}>点点更健康</button>
        <br/>
        <Transition in={!this.state.in} timeout={duration}>
          {
            (state) => (
              <div style={{...defaultStyles, ...transtitionStyles[state]}}>
                I am the fade one.
              </div>
            )
          }
        </Transition>
      </div>
    )
  }
};

export default TransitionComponent;