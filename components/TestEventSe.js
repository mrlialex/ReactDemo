import React from 'react';

class TestEventSe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['one', 'two', 'three', 'four', 'five', 'six']
    }
  };

  showSelf(index, e) {
    console.log(e.nativeEvent)
    let listCopy = this.state.items.concat();
    listCopy.splice(index, 1)
    console.log(listCopy)
    this.setState({
      items: listCopy
    })
  }

  render() {
    var arr = [];
    this.state.items.forEach((item, index) => {
      arr.push(
        <li onClick={this.showSelf.bind(this, index)} key={index}>{index}:{item}</li>
      )
    })
    return (
      <div className="eventSe">
        <ul>
          {arr}
        </ul>
      </div>
    )
  }
}

export default TestEventSe;