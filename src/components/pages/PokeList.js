import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Nav from '../Navigation'

class PokeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pList: []
    }
    this.getList = this.getList.bind(this);
  }

  componentDidMount(){
    for (let i = 1; i < 6; i++) {
    this.getList(i)
  }
}

  getList(type) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+type+'/', {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
  })
    .then(response => {return response.json()})
    .then(poke => {
      let pList = [...this.state.pList]
      pList.push(
        {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.front_default
        }
      )
      this.setState({pList: pList})
    })
  .catch(error => console.log('Pokemon not found!', error))
  }

  render(){
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav/>
      <Container maxWidth="xl" disableGutters="true">
        <Typography component="div" style={{ backgroundColor: '#cc0000', height: '100vh' }}>
        PokeList
        {this.state.pList.map((poke, index) => (
          <div>
          <img src ={poke.img} alt={poke.name} />
        <p>{poke.id} {poke.name}</p>
        </div>
    ))}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
}
export default PokeList;
