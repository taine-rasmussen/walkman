import React from 'react'
import { BsSpotify } from 'react-icons/bs'

import './Body.css'

const Body = (props) => {
  const {
    playingTrack
  } = props

  // build recently played feature


  return (
    <div className='body_container'>
      {playingTrack ? (
        <div className='body_playing_container'>
          <img src={playingTrack.albumUrl} style={{ height: "256px", width: "256px" }} />
          <h3>{playingTrack.title}</h3>
        </div>
      ) : (
        <BsSpotify />
      )
      }
    </div>
  )
}

export default Body
