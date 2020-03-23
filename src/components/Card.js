import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.img = "";
    this.id = "";
    this.text = "secondary";
  }

  //Add items from list to a card to display to users
  render() {
    return (
      <Card id={this.props.id} elevation={0}>
        <CardMedia
          image={this.props.img}
          style={{ height: 96, backgroundSize: "contain" }}
          title={this.props.name}
        />
        <CardContent>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            color={this.props.text}
            style={{ textTransform: "capitalize" }}
          >
            {this.props.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default PokeCard;
