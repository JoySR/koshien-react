import React, { Component } from 'react';
import './assets/css/font-awesome.min.css';
import config from "./config/config";
import Header from "./components/Header";
import Main from "./components/Main";
import Reference from "./components/Reference";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Reference
          linkList={config.linkList}
        />
        <Footer
          startDate={config.startDate}
        />
      </div>
    );
  }
}

export default App;
