import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Nav from '../Navigation'
import Grid from '@material-ui/core/Grid';

class Type extends Component {

  constructor(props) {
    super(props)
    this.type= 0;
    this.state = {
      tList: []
    }
    this.getTypeList = this.getTypeList.bind(this);
  }

  componentDidMount(){
    this.getTypeList(10)
}

  getTypeList(type) {
    fetch('https://pokeapi.co/api/v2/type/'+type+'/', {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
  })
    .then(response => {return response.json()})
    .then(poke => {
      let len = poke.pokemon.length-10
      for(let i = 0; i < len; i++) {
        console.log(poke.pokemon[i]);
        let url = poke.pokemon[i].pokemon.url
        let num = url.substring(34, url.lastIndexOf("/"))
        let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png"
        let tList = [...this.state.tList]
        tList.push({
          id: num,
          name: poke.pokemon[i].pokemon.name,
          img: imgUrl
        })
        this.setState({tList: tList})
      }
    })
  .catch(error => console.log('Pokemon not found!', error))
  }

  render(){
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters="true">
        <Typography component="div" style={{ backgroundColor: '#cc0000', height: '100vh' }}>
          <Grid container spacing={3}>
        {/*Create Modal to show information*/}
        {this.state.tList.map((poke, index) => (
          <Grid key={poke.id} item xs={4}>
          <img src ={poke.img} alt={poke.name} />
         <p>{poke.name}</p>
      </Grid>
    ))}
  </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
}
export default Type;
