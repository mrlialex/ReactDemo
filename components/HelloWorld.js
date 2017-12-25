import React from 'react';

class HelloWorld extends React.Component {
  render() {
    let msgList = [];
    this.props.arrMsg.forEach((item, index) => {
      msgList.push(
        <p key={index}>{item}</p>
      )
    })
    return (
      <div>
        <h2>Child component</h2>
        <p>{this.props.msg}</p>
        {msgList}
      </div>
    )
  }
};

export default HelloWorld