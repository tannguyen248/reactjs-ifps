import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Sidebar from "../Sidebar";
import Editor from "../Editor";

const App = ({ images }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <Grid container>
          <Grid item xs={4}>
            <Sidebar images={images} />
          </Grid>
          <Grid item xs={8}>
            <Editor />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
