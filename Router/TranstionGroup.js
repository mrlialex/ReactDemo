import React, {Component} from 'react';
import BasicComponent from '../utils/BasicComponent';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../style/TransitionGroup.css';

const duration = 800;

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={duration}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class TranstionGrouo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrList: ['one', 'two', 'three', 'four']
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(index) {
    console.log(index)
    let newList = this.state.arrList.concat();
    newList.splice(index, 1);
    this.setState({
      arrList: newList
    })
  }

  render() {
    return (
      <TransitionGroup>
        {
          this.state.arrList.map((item, i) => (
            <Fade key={item}>
              <div>
                {`${item} `}
                <button onClick={() => this.handleRemove(i)}>
                  &times;
                </button>
              </div>
            </Fade>
          ))
        }
      </TransitionGroup>
    )
  }
};

export default TranstionGrouo;