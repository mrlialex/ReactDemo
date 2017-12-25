import React from 'react';

class TestEventForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'something here',
      selectValue: 'A',
      radioValue: 'B',
      checkBoxVal: ['A'],
      textareaValue: 'many many words here'
    }
  }

  submit(e) {
    // refs.sth 就是Dom元素
    // refs.sth.value 是dom的value
    e.preventDefault()
    console.log(this.refs);
    let formVal = {
      input: this.refs.inputVal.value,
      textarea: this.refs.textareaVal.value,
      select: this.refs.selectVal.value,
      Radio: this.state.radioValue,
      checkBox: this.state.checkBoxVal,
    }
    console.log(formVal)
  }

  handleRadio(e){
    console.log(e.target.value);
    this.setState({
      radioValue: e.target.value
    })
  }

  handleCheck(e) {
    console.log(e.target);
    let arr = this.state.checkBoxVal.slice();
    let val = e.target.value
    let index = arr.indexOf(val)
    if(index === -1) {
      arr.push(val)
    } else {
      arr.splice(index, 1)
    }

    this.setState({
      checkBoxVal: arr
    })
    console.log(arr)
  }

  render() {
    return(
      <form onSubmit={this.submit.bind(this)} className="formGroup">
        <input ref="inputVal" type="text" defaultValue={this.state.inputValue}/>
        <br/>
        <textarea ref="textareaVal" cols="30" rows="10" defaultValue={this.state.textareaValue}></textarea>
        <br/>
        <select ref="selectVal" defaultValue={this.state.selectValue}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <br/>
        <input onChange={this.handleRadio.bind(this)} type="radio" name="goodRadio" value="A" />
        <input onChange={this.handleRadio.bind(this)} type="radio" name="goodRadio" value="B" defaultChecked/>
        <input onChange={this.handleRadio.bind(this)} type="radio" name="goodRadio" value="C" />
        <input onChange={this.handleRadio.bind(this)} type="radio" name="goodRadio" value="D" />
        <br/>
        <input onChange={this.handleCheck.bind(this)} type="checkbox" name="goodCheckBox" value="A" defaultChecked/>
        <input onChange={this.handleCheck.bind(this)} type="checkbox" name="goodCheckBox" value="B"/>
        <input onChange={this.handleCheck.bind(this)} type="checkbox" name="goodCheckBox" value="C"/>
        <input onChange={this.handleCheck.bind(this)} type="checkbox" name="goodCheckBox" value="D"/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
};

export default TestEventForm;