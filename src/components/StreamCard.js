import React from 'react'



class Stream extends React.Component {




  render () {
    const stream=this.props.stream
    return(
      <div>
          <div className="card" onClick={() => this.props.handleClickOnStream(stream)} >
            <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_riotgames-400x225.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <a href='#'>
              <p className="card-text">{stream.user_name}</p>
              </a>
              <p className="card-text">{stream.title}</p>
            </div>
          </div>
      </div>
    )
  }
}


export default Stream ;
