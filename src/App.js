import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Toast from "./Components/Toasts/Toast";


class App extends Component {

  render = () =>{
      return (
<div className="App">

    <Routes/>
    <Toast />
</div>
      )
  }
}

export default App;
