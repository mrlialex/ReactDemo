import React from 'react';
import PropTypes from 'prop-types'

class TestProps extends React.Component {
  
  constructor(props){
    super(props); 
  }

  render() {
    console.log(this.props)
    return(
      <div className="props">
        <p>
          {this.props.msg}
        </p>
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }

};

TestProps.defaultProps = {
  msg: 'hahahaha'
};

TestProps.propTypes = {
  msg: PropTypes.string.isRequired
};

export default TestProps;