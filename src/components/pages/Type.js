import React, { Component } from "react";
import Input from "../TypeSearch";
import TypeList from "../TypeList";
import Nav from "../nav/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Type extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      typeName: "",
      isHidden: true
    };
  }
  //When type is selected call the api
  handleChange = event => {
    event.preventDefault();
    this.setState({
      isHidden: false,
      type: event.target.value
    });
  };

  render() {
    return (
      <Typography
        style={{ background: "#222224", height: "100VH", overflow: "scroll" }}
      >
        <CssBaseline />
        <Nav />
        <Grid container>
          <Grid item md={4} xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h2" color="primary">
              Find By Type
            </Typography>
            <Input handleChange={this.handleChange} />
          </Grid>
          <Grid item md={8} xs={12}>
            {/*If the state is currently hidden then load the TypeList component*/}
            {!this.state.isHidden && <TypeList type={this.state.type} />}
          </Grid>
        </Grid>
      </Typography>
    );
  }
}

export default Type;
