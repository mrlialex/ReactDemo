import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/store';

import './semantic-css/Semantic-UI-CSS/semantic.css';
import './style/index.styl';

import HeaderComponent from './components/HeaderComponent';
import App from './RouterComponent/App';
import Flex from './Flex/flex'
import MainComponent from './TestRedux/MainComponent'


ReactDom.render(
  <Provider store={ store }>
    <MainComponent />
  </Provider>,
  document.getElementById('app'),
);