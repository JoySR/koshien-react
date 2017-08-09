import React, { Component } from 'react';
import './assets/css/font-awesome.min.css';
import './App.css';
import Footer from "./components/Footer";
import Reference from "./components/Reference";
import Header from "./components/Header";
import config from "./config/config";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Reference
          linkList={config.linkList}
        />
        <Footer
          startDate="2017.08.09"
        />
      </div>
    );
  }
}

export default App;
