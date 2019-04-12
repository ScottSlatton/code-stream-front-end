import React from 'react'


class NavBar extends React.Component {




  render () {
    return(

    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">CodeStream</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Categories
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">React</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">JavaScript</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Ruby</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Rails</a>
      </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/user/edit">My Account</a>
        </div>
      </li>
    </ul>


  </div>
  <form class="form-inline">
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text"><i class="far fa-user"></i></div>
      </div>
      <input type="text" class="form-control" id="username_login" placeholder="Username" />
    </div>

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text"><i class="fas fa-key"></i></div>
    </div>
    <input type="password" class="form-control" id="password_login" placeholder="password" />
  </div>


  <button type="submit" class="btn btn-primary mb-2">Get me in there</button>
</form>

</nav>


    )

  }
}

export default NavBar ;
