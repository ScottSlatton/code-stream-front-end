import React, { Component } from 'react';
import '../Home.css';
import Stream from './Stream'
import NavBar from './NavBar'


class Home extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className="Home">
        <Stream />
      </div>
    );
  }
}

export default Home;


// <header className="App-header">
// </header>
