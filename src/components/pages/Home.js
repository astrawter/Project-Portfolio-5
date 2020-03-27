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

// getList(num) {
//   fetch("https://pokeapi.co/api/v2/pokemon/" + num + "/", {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     }
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(poke => {
//       let pList = [...this.state.pList];
//       //add the id, name, and img to the list as an object
//       pList.push({
//         id: poke.id,
//         name: poke.name,
//         img: poke.sprites.front_default
//       });
//       this.setState({ pList: pList });
//     })
//     .catch(error => console.log("Pokemon not found!", error));
// }
