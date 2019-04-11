import React from 'react'
import {  NavLink } from 'react-router-dom';



class Stream extends React.Component {




  render () {
    const stream=this.props.stream
    return(
      <div>
        <NavLink to={`show/${stream.user_id}`}>
          <div class="card" >
            <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-400x225.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">{stream.user_name}</p>
              <p class="card-text">{stream.title}</p>
            </div>
          </div>
        </NavLink>
      </div>
    )
  }
}


export default Stream ;
