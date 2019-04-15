import React, { Component } from 'react';
import './Home.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser: {}
    }
  }

  setLoggedInUser = (user) =>{
    console.log('User within home.js')
    this.setState({
      loggedInUser: user
    })
  }
  
  render() {
    return (
      <div className="Home">
      <NavBar setLoggedInUser={this.setLoggedInUser} />
      <Home />
      </div>
    );
  }
}


export default App;
// <Router>
// <Route path='/signup' component={(props) => <SignUp {...props} setLoggedInUser={this.setLoggedInUser} /> } />
// </Router>
// //
