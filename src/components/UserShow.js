import React from 'react'
import NavBar from './NavBar'


class UserShow extends React.Component {
state={
  id: '',
  stream: []
}

  componentDidMount(){
    const handle = this.props.match.params
    this.setState({
      id: handle.id
    }, this.fetchThisUsersData)
  }

  fetchThisUsersData =() =>  {
    fetch(`https://api.twitch.tv/helix/streams?user_id=${this.state.id}`, {
      method: "GET",
      headers: {
        'Client-ID': 'x0fppvthz2c0q5o39asuuigdu4icom'
      }
    }).then(resp => resp.json())
    .then(stream => {
      this.setState({
        stream: stream.data[0]
      })
      }
    )
  }

  render () {
    const stream = this.state.stream
    console.log(stream)
    return(
      <div className="Home">
        <NavBar />
        <h1>{stream.title} </h1>
        <iframe
          src={`https://player.twitch.tv/?video=${stream.id}&autoplay=true`}
          height="400"
          width="800"
          frameBorder="<frameborder>"
          scrolling="<scrolling>"
          allowFullScreen="<allowfullscreen>"
          >
        </iframe>
      </div>
    )

  }
}

export default UserShow ;
