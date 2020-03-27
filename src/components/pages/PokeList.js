import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Nav from "../nav/Navigation";
import Grid from "@material-ui/core/Grid";
import Card from "../Card";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class PokeList extends Component {
  //Create an empty array to store the pokemon in
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      isOpen: false,
      pList: []
    };
    this.getList = this.getList.bind(this);
  }

  //When clicked anchor menu on target show 4 moves
  handleClick = event => {
    event.preventDefault();
    this.setState({
      anchorEl: event.currentTarget,
      isOpen: true
    });
  };

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

    console.log(check);
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
          img: poke.sprites.front_default,
          moves: poke.moves
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
                  <Card
                    name={poke.name}
                    img={poke.img}
                    id={poke.id}
                    handleClick={this.handleClick}
                  />
                  <div>
                    {/*{!this.state.isHidden && (
                      <Moves anchorEl={this.state.anchorEl} />
                    )}
                    <Menu open={false}>
                      <MenuItem>{poke.moves[0].move.name}</MenuItem>
                      <MenuItem>{poke.moves[1].move.name}</MenuItem>
                      <MenuItem>{poke.moves[2].move.name}</MenuItem>
                      <MenuItem>{poke.moves[3].move.name}</MenuItem>
                    </Menu>*/}
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
