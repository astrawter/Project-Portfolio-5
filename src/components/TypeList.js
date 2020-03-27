import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

class TypeList extends Component {
  constructor(props) {
    super(props);
    this.type = "";
    this.state = {
      tList: []
    };
    this.getTypeList = this.getTypeList.bind(this);
  }

  handleClick = event => {
    event.preventDefault();
    console.log(event.target);
  };

  componentDidMount() {
    this.getTypeList(this.props.type);
  }
  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.getTypeList(this.props.type);
    }
  }

  getTypeList(type) {
    fetch("https://pokeapi.co/api/v2/type/" + type + "/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(poke => {
        //clear tList for new selections
        this.setState({ tList: [] });
        //cut the last 10 pokemon off because some did not have images
        let len = poke.pokemon.length - 14;
        for (let i = 0; i < len; i++) {
          //get the url of each pokemon
          let url = poke.pokemon[i].pokemon.url;
          //remove the number from the end of the url
          let num = url.substring(34, url.lastIndexOf("/"));
          //take the pokemon id and get the default image
          let imgUrl =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            num +
            ".png";
          let tList = [...this.state.tList];
          tList.push({
            id: num,
            name: poke.pokemon[i].pokemon.name,
            img: imgUrl,
            url: url
          });
          this.setState({ tList: tList });
        }
      })
      .catch(error => console.log("Pokemon not found!", error));
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={3}>
          {/*Create Modal to show information*/}
          {this.state.tList.map((poke, index) => (
            <Grid key={poke.id} item xs={6} md={4}>
              <Card
                name={poke.name}
                img={poke.img}
                id={poke.id}
                text="primary"
                handleClick={this.handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}
export default TypeList;
