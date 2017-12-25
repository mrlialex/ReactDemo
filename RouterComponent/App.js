import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TV from './TV';
import Show from './Show';
import HeaderComponent from '../components/HeaderComponent'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">首页</Link>
            <Link to="/tv" className="item">电视</Link>
          </div>
          
          <Route path="/tv" component={TV} />
        </div>
      </Router>
    )
  };
}

export default App;