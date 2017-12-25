import React from 'react';

class TestEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true,
      showSe: true
    }

    // this is necessary!!!
    this.toggleFlag = this.toggleFlag.bind(this)
  }

  actionClick(msg) {
    console.log(msg)
    this.setState((preState) => {
      return {
        count : preState.count + 1
      }
    })
  }

  toggleFlag() {
    this.setState({
      show: !this.state.show
    })
  }

  toggleFlagSe() {
    this.setState({
      showSe: !this.state.showSe
    })
  }

  clearCount() {
    this.setState({
      count: 0
    })
  }

  render() {
    var showFlag = {
      display: this.state.show ? 'block' : 'none'
    }
    var showFlagSe = {
      display: this.state.showSe ? 'block' : 'none'
    }
    return (
      <div className="event">
        <button onClick={this.actionClick.bind(this, 'hehehe')}>Click me</button>
        <button onClick={(e) => this.clearCount(e)}>Clear</button>
        <button onClick={this.toggleFlag}>来啊！点我啊</button>
        <button onClick={(e) => this.toggleFlagSe(e)}>来啊！点我啊</button>
        <p>Total Click Number: {this.state.count}</p>
        <div style={showFlag} className="color"></div>
        <div style={showFlagSe} className="color"></div>
      </div>
    )
  }
}

export default TestEvent;