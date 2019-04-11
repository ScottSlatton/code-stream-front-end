import React from 'react'
import StreamCard from './StreamCard'
import Jumbotron from './Jumbotron'


class Stream extends React.Component {
  constructor(){
    super()
    this.state = {
      streams: []
    }
  }

  componentDidMount(){
    fetch('https://api.twitch.tv/helix/streams', {
      method: "GET",
      headers: {
        'Client-ID': 'x0fppvthz2c0q5o39asuuigdu4icom'
      }
    }).then(resp => resp.json())
    .then(streams => {
      this.setStreams(streams)}
    )
  }

  setStreams = (streams) =>{
    this.setState({
      streams: streams.data
    })
  }

  handleClickOnStream =(stream) => {
    console.log(stream)
    return
    // take clicker to users show page
  }

  renderStreams = () => {
      return this.state.streams.map(stream => {
        if(this.state.streams[0] === stream){
          return null
        } else {
          return  <StreamCard
          stream={stream}
          key={stream.title}
          handleClickOnStream={this.handleClickOnStream}/>
        }
      })
  }

  render () {
    return(
      <div>
      <Jumbotron stream={this.state.streams[0]}/>
        <div class="stream_card_container">
          {this.renderStreams()}
        </div>
      </div>

    )
  }
}

export default Stream ;
