import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.img = "";
    this.id = "";
    this.text = "secondary";
  }

  //Add items from list to a card to display to users
  render(props) {
    return (
      <Card
        elevation={0}
        style={{ width: "50%" }}
        onClick={this.props.handleClick}
      >
        <CardActionArea>
          <CardMedia
            id={this.props.id}
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
        </CardActionArea>
      </Card>
    );
  }
}
export default PokeCard;
