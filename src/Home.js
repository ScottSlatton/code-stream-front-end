import React, { Component } from 'react';
import './Home.css';
import Stream from './components/Stream.js'
import NavBar from './components/NavBar.js'


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      login_id: 1
    }
  }

  render() {
    return (
      <div className="Home">
        <NavBar />
        <Stream />
      </div>
    );
  }
}

export default Home;


// <header className="App-header">
// </header>
