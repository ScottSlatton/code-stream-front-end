import React from 'react'
import StreamCard from './StreamCard'
import Jumbotron from './Jumbotron'


class Stream extends React.Component {
  constructor(){
    super()
    this.state = {
      streams: [],
      jumbotronStream: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/videos')
    .then(resp => resp.json())
    .then(streams => {
      this.setState({
        streams: streams.data
      }, this.setJumbotron(this.state.streams.slice(0, 1)))
    })

  }

  setJumbotron =(stream) => {
    let counter = 0
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
        <div className="stream_card_container">
          {this.renderStreams()}
        </div>
      </div>

    )
  }
}

export default Stream ;
