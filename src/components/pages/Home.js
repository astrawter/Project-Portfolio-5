import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Nav from "../nav/Navigation";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <Container maxWidth="xl" disableGutters={true}>
        <Typography component="div" />
      </Container>
    </React.Fragment>
  );
}
