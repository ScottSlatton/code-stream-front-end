import React from 'react'
import {  NavLink } from 'react-router-dom';



class Stream extends React.Component {




  render () {
    const stream=this.props.stream
    return(
      <div>
          <div class="card" onClick={() => this.props.handleClickOnStream(stream)} >
            <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-400x225.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">{stream.user_name}</p>
              <p class="card-text">{stream.title}</p>
            </div>
          </div>
      </div>
    )
  }
}


export default Stream ;
