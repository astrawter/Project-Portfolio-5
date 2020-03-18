import React, {Component} from 'react';
import Input from '../TypeSearch';
import Type from './Type'

class Test extends Component {

  constructor() {
    super()
    this.state = {
      type: '',
      typeName: ''
    }
    this.getMon = this.getMon.bind(this);
  }


handleChange = event => {
  event.preventDefault()
  this.getMon(event.target.value)
};


getMon(type) {

  }

  render (){
    return(
      <div className="App">
        <Input
          value = {this.state.typeName}
          handleChange={this.handleChange}/>
          <Type/>
    </div>)
  };
}

export default Test;
