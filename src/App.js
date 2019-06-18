import React from 'react';
import './App.css';
import {ComputerCard} from "./components/ComputerCard";
import {AddCard} from "./components/AddCard";
import {ThemeProvider} from "@material-ui/styles";
import theme from './palette';
import {Grid} from "@material-ui/core";

function App() {
  return (

      <ThemeProvider theme={theme}>
          <Grid container direction="row"  spacing={3}>
              <Grid item xs={10} md={3}><AddCard></AddCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>
              <Grid item xs={10} md={3}><ComputerCard></ComputerCard></Grid>


          </Grid>
      </ThemeProvider>

  );
}

export default App;
