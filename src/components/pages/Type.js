import React, {Component} from 'react';
import Input from '../TypeSearch';
import TypeList from '../TypeList'
import Nav from '../Navigation'

class Type extends Component {

  constructor() {
    super()
    this.state = {
      type: '',
      typeName: '',
      isHidden: true
    }
  }


handleChange = event => {
  event.preventDefault()
  this.setState({
    isHidden: false,
    type: event.target.value
  })
};


  render (){
    return(
      <div className="App">
      <Nav />
        <Input
          value = {this.state.typeName}
          handleChange={this.handleChange}/>
          {!this.state.isHidden && <TypeList type= {this.state.type} />}
    </div>)
  };
}

export default Type;
