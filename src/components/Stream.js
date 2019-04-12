import React from 'react'
import StreamCard from './StreamCard'
import Jumbotron from './Jumbotron'
import Key from '../.key.js'


class Stream extends React.Component {
  constructor(){
    super()
    this.state = {
      streams: [],
      jumbotronStream: []
    }
  }

  componentDidMount(){
    fetch('https://api.twitch.tv/helix/streams', {
      method: "GET",
      headers: {
        'Client-ID': Key
      }
    }).then(resp => resp.json())
    .then(streams => {
      this.setState({
        streams: streams.data
      }, this.setJumbotron(this.state.streams.slice(0, 1)))
    })

  }

  setJumbotron =(stream) => {
    let counter = 0
    console.log("setJumotron has been called: ", counter += 1)
    this.setState({
      jumbotronStream: stream
    })
  }

  handleClickOnStream =(stream) => {
    console.log('click the stream', stream)
      this.setJumbotron(stream)
    console.log('state was set', this.state.jumbotronStream)

  }

  renderStreams = () => {

      return this.state.streams.map(stream => {

          return  <StreamCard
          stream={stream}
          key={stream.title}
          handleClickOnStream={this.handleClickOnStream}/>

      })
  }


  render () {
    return(
      <div>
      <Jumbotron stream={this.state.jumbotronStream}/>
      <h6>Live Streams </h6>
        <div class="stream_card_container">
          {this.renderStreams()}
        </div>
      </div>

    )
  }
}

export default Stream ;
