import React, {Component} from 'react';
import './App.css';
import PageSelector from './components/PageSelector'


class App extends Component{
  render() {
    return (
        <PageSelector maxStep={9}
                      minStep={0}
                      currentStep={0}
                      minPage={0}
                      maxPage={20}
                      currentPage={0}
        />
    );
  };
}

export default App;
