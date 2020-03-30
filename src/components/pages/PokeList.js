import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Nav from "../nav/Navigation";
import Grid from "@material-ui/core/Grid";
import Card from "../Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    //Add each pokemon from the random numbers to the list
    let check = [];
    for (var i = 1; i < 13; i++) {
      //Generate 12 random numbers
      let rand = Math.floor(Math.random() * 151) + 1;
      //check if array contains number
      if (!check.includes(rand)) {
        //add the numbers to an array and
        check.push(rand);
      } else {
        //if it contains the number reroll
        rand = Math.floor(Math.random() * 151) + 1;
        //push to array
        check.push(rand);
      }
    }
    check.forEach(num => this.getList(num));
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
        //Push 4 moves to array
        let x = 0;
        let moves = [];
        poke.moves.forEach(move => {
          if (!(x >= 4)) {
            moves.push(move.move.name);
          }
          x = x + 1;
        });
        //add the id, name, and img to the list as an object
        pList.push({
          id: poke.id,
          name: poke.name,
          img: poke.sprites.front_default,
          moves: moves
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
          style={{ margin: "2% 8%" }}
        >
          <Typography component="div">
            <Grid container>
              {/*Loop through the list and display each object*/}
              {this.state.pList.map((poke, index) => (
                <Grid
                  key={poke.id}
                  item
                  xs={6}
                  md={3}
                  style={{ marginBottom: "3%" }}
                  onClick={this.handleClick}
                >
                  <Card name={poke.name} img={poke.img} id={poke.id} />
                  <div id={poke.id}>
                    <List>
                      <ListItem>
                        <ListItemText primary={poke.moves[0]} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary={poke.moves[1] || "???"} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary={poke.moves[2] || "???"} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary={poke.moves[3] || "???"} />
                      </ListItem>
                    </List>
                  </div>
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
