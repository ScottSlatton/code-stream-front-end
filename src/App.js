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
      loggedInUser: {},
      loggedIn: false,
      displaySignUp: false
    }
  }

  setLoggedInUser = ( user) =>{
    console.log('User within home.js')
    this.setState({
      loggedInUser: user,
      loggedIn: true
    })
  }

  renderSignUp =(e) =>{
    this.setState({
      displaySignUp: true
    })
  }

  dismountSignUp=(e) =>{
    this.setState({
      displaySignUp: false
    })
  }

  signOut =() =>{
    this.setState({
      loggedInUser: {}
    })
  }

  logInUser =() => {

  }

  render() {
    if(!this.state.displaySignUp) {
      return <div className="Home">
              <NavBar  renderSignUp={this.renderSignUp}
                loggedInUser={this.state.loggedInUser}
                setLoggedInUser={this.setLoggedInUser}
                loggedIn={this.state.loggedIn}
                logInUser={this.logInUser}/>
              <Home />
            </div>
    } else {
      return <SignUp setLoggedInUser={this.setLoggedInUser}
                      dismountSignUp={this.dismountSignUp}
                      signOut={this.signOut}/>
    }

  }
}


export default App;
// <Router>
// <Route path='/signup' component={(props) => <SignUp {...props} setLoggedInUser={this.setLoggedInUser} /> } />
// </Router>
// //
