import React from 'react'



class Jumbotron extends React.Component {



  render () {
    return(
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">{}</h1>
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
