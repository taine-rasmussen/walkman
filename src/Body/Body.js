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
      <BsSpotify />
    </div>
  )
}

export default Body
