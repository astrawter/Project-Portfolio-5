import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Nav from "../nav/Navigation";
import Grid from "@material-ui/core/Grid";
import Card from "../Card";

class PokeList extends Component {
  //Create an empty array to store the pokemon in
  constructor(props) {
    super(props);
    this.state = {
      pList: []
    };
    this.getList = this.getList.bind(this);
  }
  componentDidMount() {
    //Generate a random number between 10-150
    let rand = Math.floor(Math.random() * 150 + 13);
    //Add each pokemon from the random numbers to the list
    for (let i = rand - 12; i < rand; i++) {
      this.getList(i);
    }
  }

  getList(num) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + num + "/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(poke => {
        let pList = [...this.state.pList];
        //add the id, name, and img to the list as an object
        pList.push({
          id: poke.id,
          name: poke.name,
          img: poke.sprites.front_default
        });
        this.setState({ pList: pList });
      })
      .catch(error => console.log("Pokemon not found!", error));
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Nav />
        <Container
          maxWidth="xl"
          disableGutters={true}
          style={{ marginTop: "25px" }}
        >
          <Typography component="div">
            <Grid container>
              {/*Loop through the list and display each object*/}
              {this.state.pList.map((poke, index) => (
                <Grid key={poke.id} item xs={6} md={3}>
                  <Card name={poke.name} img={poke.img} id={poke.id} />
                </Grid>
              ))}
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
export default PokeList;
