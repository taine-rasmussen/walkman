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
      <div className='body_left_container'>
        <h3>Recently played</h3>
        {recentlyPlayed.map((song, i) => (
          <div className='recently_played_song' key={i}>
            <img src={song.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="recently_played_info">
              <div className="recently_primary">{song.title}</div>
              <div>{song.artist}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='pulse'>
        <BsSpotify />
      </div>
    </div>
  )
}

export default Body
