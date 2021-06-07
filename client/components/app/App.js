import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Editor from "../Editor";
import { EditorProvider } from "../context/EditorProvider";

const AppView = ({ images }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Sidebar images={images} />
          </Grid>
          <Grid item xs={9}>
            <Editor />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const App = ({ images }) => {
  return (
    <EditorProvider>
      <AppView images={images} />
    </EditorProvider>
  );
};

export default App;
