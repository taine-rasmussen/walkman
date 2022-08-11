import { useState, useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs'

import './Body.css'

const Body = (props) => {
  const {
    playingTrack
  } = props

  const [recentlyPlayed, setRecentlyPlayed] = useState([])

  useEffect(
    () => {
      if (!playingTrack) return;
      setRecentlyPlayed([...recentlyPlayed, playingTrack])
    }, [playingTrack])

  return (
    <div className='body_container'>
      <div className='spinner'>
        <BsSpotify />
      </div>
    </div>
  )
}

export default Body
