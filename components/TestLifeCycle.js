import React from 'react';

class TestLifeCycle extends React.Component {

  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      msg: 'hei, bro!'
    };
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount!')
  // }

  // componentWillUnmount() {
  //   alert('componentWillUnmount')
  // }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log('Yo.')
    console.log(nextprops, nextstate);
    return true
  }

  componentWillUpdate(nextprops, nextstate) {
    console.log(('yoyo'));
    console.log(nextprops, nextstate)
  }

  componentDidUpdate(prevprops, prevstate) {
    console.log('yoyoyoyo!')
    console.log(prevprops, prevstate )
  }
  
  handleupdate() {
    this.setState({
      msg: '手动更新啦啦啦'
    })
  }

  render() {

    console.log('渲染');
    
    return (
      <div className="lifecyce">
        <p>{this.state.msg}</p>
        <p>{this.props.sthToson}</p>
        <button onClick={this.handleupdate.bind(this)}>手动更新</button>
      </div>
    )
  }

  }

export default TestLifeCycle;