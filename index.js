import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
// import store from './Redux/store';

import './semantic-css/Semantic-UI-CSS/semantic.css';
import './style/index.styl';

import HeaderComponent from './components/HeaderComponent';
import App from './RouterComponent/App';
import Flex from './Flex/flex';
import MainComponent from './TestRedux/MainComponent';

import ListStore from './TodoListReduxDemo/Redux/store';
import TodoListRedux from './TodoListReduxDemo/TodoList';

import RouterDemo from './Router/MainRouter';

// Provider 隐式将store传入整个组件中；
/* ReactDom.render(
  <Provider store={ ListStore }>
    <TodoListRedux />
  </Provider>,
  document.getElementById('app'),
); */

ReactDom.render(
  <RouterDemo />,
  document.getElementById('app')
);