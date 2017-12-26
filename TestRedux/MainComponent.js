import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import BasicComponent from '../utils/BasicComponent';
import {increase, decrease} from '../Redux/action';

class MainComponent extends BasicComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        num: 0,
        content: Map({
          data: 1,
          doubleNum: 2
        })
      })
    };
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease(data) {
    this.props.dispatch(increase(data));
    this.setState({
      data: this.state.data
            .update('num', v => v + 1)
            .updateIn(['content', 'data'], v => v + 1)
            .updateIn(['content', 'doubleNum'], v => v*2 + 1)
    })
  }

  handleDecrease(data) {
    this.props.dispatch(decrease(data));
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Redux实验用的</h1>
        <button className="ui default button"
                onClick={ this.handleIncrease.bind(this, this.props.result.get('data')) }>有本事你点我啊！( + )</button>
        <button className="ui default button"
                onClick={ this.handleDecrease.bind(this, this.props.result.get('data')) }>有本事你点我啊！( - )</button>
        <p>来自data:{this.state.data.getIn(['num'])}</p>
        <p>来自redux: {this.props.result.getIn(['data'])}</p>
      </div>
    )
  }

}

export default connect( (state) => {
  console.log(state)
  console.log(state.getIn(['fatherRedux']))
  return {
    result: state.getIn(['fatherRedux'])
  }
})( MainComponent );