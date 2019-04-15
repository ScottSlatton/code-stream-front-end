import React from 'react'

class SignUp extends React.Component{
  constructor(props){
    super(props)
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
    const body={
      user: {
        username: this.state.username,
        password: this.state.password
      }
    }
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      this.props.setLoggedInUser(user)
    })
    .then(this.props.dismountSignUp)
  }

  render(){
    return (
      <div className="login_form_container">
      <form onSubmit={this.handleSubmit} action="/">
      	<div className="form-group input-group">
      		<div className="input-group-prepend">
      		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
      		 </div>
              <input name="username" className="form-control"
                placeholder="Username" type="text" onChange={this.handleChange}/>
          </div>
          <div className="form-group input-group">
          	<div className="input-group-prepend">
      		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
      		</div>
              <input name='password' className="form-control"
                placeholder="Create password" type="password" onChange={this.handleChange}/>
          </div>

            {/*  <div className="form-group input-group">
              	<div className="input-group-prepend">
          		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
          		  </div>
                 <input name="password" className="form-control"
                    placeholder="Repeat password" type="password"/>
              </div>*/}
          <div className="form-group">
              <button  type="submit" className="btn btn-primary btn-block"> Create Account  </button>
          </div>
          <div className="form-group">
              <button onClick={this.props.dismountSignUp} className="btn btn-primary btn-block"> Back  </button>
          </div>
      </form>
    </div>
    )

  }
}

export default SignUp
