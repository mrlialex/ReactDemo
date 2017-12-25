import React from 'react';

class Show extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match)
    return (
      <div>
        <h3>当前节目为：TV{this.props.match.params.id}</h3>
      </div>
    )
  };
}


export default Show;