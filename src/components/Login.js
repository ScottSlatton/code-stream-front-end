import React from 'react'
import NavBar from './NavBar'

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form with username', this.state.username)
    console.log('submitting form with password', this.state.password)
    //fetch request to backend with state details from above
  }

  render(){
    return (
      <div className="login_form_container">
      <form className="login_form" onSubmit={this.handleSubmit}>
      <input type ='text' name = 'username' placeholder="Username" onChange={this.handleChange}/>
      <input type ='password' name = 'password' placeholder="Password" onChange={this.handleChange}/>
      <input type ='submit' value="Login" />
      </form>
      </div>
    )

  }
}

export default Login
