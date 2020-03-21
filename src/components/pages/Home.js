import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Nav from '../Navigation'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav/>
      <Container maxWidth="xl" disableGutters="true">
        <Typography component="div" style={{ backgroundColor: '#ee1515', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
