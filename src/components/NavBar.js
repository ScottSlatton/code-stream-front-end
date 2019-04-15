import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: ''
    }
  }

  handleChange =(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit =(e) =>{
    e.preventDefault();
    const body={
        username: this.state.username,
        password: this.state.password
    }

    fetch('http://localhost:3000/sessions/create',{
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(user => {
      this.props.setLoggedInUser(user)
    })
  }



  render () {
    return(

    <nav className="navbar sticky-top navbar-expand-lg navbar-light primary-color">
  <a className="navbar-brand" href="/">CodeStream</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Categories
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">React</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">JavaScript</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Ruby</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Rails</a>
      </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/user/edit">My Account</a>
        </div>
      </li>
    </ul>


  </div>
  { !this.props.loggedIn ? <span>
  <form className="form-inline" onSubmit={this.handleSubmit}>
    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text"><i className="far fa-user"></i></div>
      </div>
      <input type="text" name='username'
        className="form-control" id="username_login" placeholder="Username"
        onChange={this.handleChange}/>
    </div>

  <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-key"></i></div>
    </div>
    <input type="password" name='password'
      className="form-control" id="password_login" placeholder="Password" onChange={this.handleChange}/>
  </div>


  <button type="submit" className="btn secondary-color mb-2">Login</button>
</form>

  <form onSubmit={this.props.renderSignUp}>
    <button type='submit' className="btn secondary-color-d mb-2">Signup</button>
  </form>
</span>
  : <form onSubmit={this.props.signOut}>
    <button type='submit' className="btn secondary-color-d mb-2">Sign Out</button>
  </form>
    }
</nav>



    )

  }
}




export default NavBar ;
