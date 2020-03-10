import React, {Component} from 'react';
import './App.css';
import Input from './components/input';

class App extends Component {

  constructor() {
    super()
    this.state = {
      type: '',
      name: '',
      img: ''
    }
    this.getChamp = this.getChamp.bind(this);
  }


handleChange = event => {
  this.setState({type: event.target.value})
  this.getChamp(this.state.type)
};


async getChamp(type) {
  await fetch('https://pokeapi.co/api/v2/type/'+type+'/', {
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
})
  .then(response => {return response.json()})
  .then(poke => {
    let url = poke.pokemon[0].pokemon.url
    let num = url.substring(34, url.lastIndexOf("/"))
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png"
    this.setState({
      name: poke.pokemon[0].pokemon.name,
      img: imgUrl
    })
  })
.catch(error => console.log('Pokemon not found!', error))
}


  render (){
    return(
      <div className="App">
        <Input
          value = {this.state.type}
          handleChange={this.handleChange}/>
        <p style={styles.p}>{`${this.state.name}`}</p>
        <img src={`${this.state.img}`} alt={`${this.state.name}`}/>
    </div>)
  };
}

export default App;

let styles = {
  p:{
    textTransform: "capitalize"
  }
}
