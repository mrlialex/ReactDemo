'use strict'
import React, {Component} from 'react';
import BasicComponent from '../utils/BasicComponent';

import { connect } from 'react-redux';
import { add, remove } from './Redux/actions';

class TodoList extends BasicComponent {
  constructor(props) {
    super(props);
  }

  handleAdd(e) {
    e.preventDefault();
    let node = this.refs.inputVal;
    let val = this.refs.inputVal.value;
    if (!val) return;
    this.props.dispatch(add(val));
    node.value = '';
  }

  handleRemove(index, e) {
    e.preventDefault();
    this.props.dispatch(remove(index));
  }

  render() {
    let arrList = [];
  
    if (this.props.content) {
      this.props.content.forEach(item => {
        arrList.push(
          <li key={item.index} onClick={this.handleRemove.bind(this, item.index)}>
            {item.index}: {item.msg}
          </li>
        )
      });
    }
    return(
      <div>
        <input type="text" ref="inputVal" placeholder="准备办的事情"/>
        <br/>
        <button className="ui button default" onClick={this.handleAdd.bind(this)}>提交</button>
        <br/>
        <button className="ui button dafault">删除</button>
        <ul>
        {
          arrList
        }
        </ul>
        <p>换一种写法</p>
        <ul>
        {
          this.props.content.map( (item) => {
            return (
              <li key={item.index} onClick={this.handleRemove.bind(this, item.index)}>
                {item.index}: {item.msg}
              </li>
            )
          } )
        }
        </ul>
      </div>
    )
  }
};


//connect函数将组件与store隐式链接起来
// this.props.content
export default connect( state => {
  return {
    content: state.getIn(['ListReducer'])
  }
})(TodoList);