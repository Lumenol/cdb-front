import React, {Component} from 'react';
import './App.css';
import PageSelector from './components/PageSelector'


class App extends Component{
  render() {
    return (
        <PageSelector max={5} min={0} current={0}></PageSelector>
    );
  };
}

export default App;
