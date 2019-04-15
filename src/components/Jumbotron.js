import React from 'react'
import {Link} from 'react-router-dom'



class Jumbotron extends React.Component {



  render () {
    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4"></h1>
            <iframe
              src={`https://player.twitch.tv/?video=&autoplay=true`}
              height="400"
              width="800"
              frameBorder="<frameborder>"
              scrolling="<scrolling>"
              allowFullScreen="<allowfullscreen>"
              >
            </iframe>
            <div>
              <Link to ={`users/${this.props.stream.user_id}`}>
                <h1>{this.props.stream.user_name}</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

  }
}


export default Jumbotron ;
