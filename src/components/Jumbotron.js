import React from 'react'



class Jumbotron extends React.Component {



  render () {
    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{}</h1>
            <iframe
              src={`https://player.twitch.tv/?video=&autoplay=true`}
              height="400"
              width="800"
              frameBorder="<frameborder>"
              scrolling="<scrolling>"
              allowFullScreen="<allowfullscreen>"
              >
            </iframe>
          </div>
        </div>
      </div>
    )

  }
}


export default Jumbotron ;
