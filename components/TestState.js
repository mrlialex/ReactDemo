import React from 'react';
import ListItem from './ListItem';

class TestState extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      msgArr: ['LI', 'zhang', 'Yo', 'hei'],
    }
  }

  
  render() {
    var visible = {
      display: this.state.isVisible ? 'block' : 'none'
    };
    let arr = [];
    this.state.msgArr.forEach( (itemMsg, index) => {
      arr.push(
        <ListItem style={visible} item = {itemMsg} key={index} />
      )
    })
    return (
      <div>
        { arr }
      </div>
    )
  }
}

export default TestState;