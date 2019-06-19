import React from 'react';
import './App.css';
import ComputerCard from "./components/ComputerCard";
import {ThemeProvider} from "@material-ui/styles";
import theme from './palette';
import {Grid} from "@material-ui/core";

function App() {
  return (

      <ThemeProvider theme={theme}>
          <Grid container direction="row"  spacing={3}>

              <Grid item xs={10} md={3}><ComputerCard id={1}></ComputerCard></Grid>
          </Grid>
      </ThemeProvider>

  );
}

export default App;
