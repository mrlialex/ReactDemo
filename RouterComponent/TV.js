import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Show from './Show'



class TV extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <div className="ui info message">电视节目列表</div>
          <div>
            <Link to={`${this.props.match.url}/show/1`} >节目1</Link>
          </div>
          <Route path={`${this.props.match.url}/show/:id`} component={Show} />
        </div>
      </Router>
    )
  }

};

export default TV;