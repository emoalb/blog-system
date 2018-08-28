import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Toast from "./Components/Toasts/Toast";
import Footer from "./Components/Footer/Footer";


class App extends Component {

  render = () =>{
      return (
<div className="App">
    <Routes/>
    <Toast />
    <Footer/>
</div>
      )
  }
}

export default App;
