import React, {Component} from 'react';
import BasicComponent from '../utils/BasicComponent';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import First from './First';
import Second from './Second';

class RouterDemo extends BasicComponent {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/first'>组件1</Link></li>
            <li><Link to='/second'>组件2</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/first'} component={First} />
            <Route path={'/second'} component={Second} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default RouterDemo;