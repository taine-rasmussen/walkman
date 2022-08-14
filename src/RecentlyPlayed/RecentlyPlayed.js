import { useState, useEffect } from 'react'
import { MdClear } from 'react-icons/md'

import './RecentlyPlayed.css'

const RecentlyPlayed = (props) => {
  const {
    playingTrack,
    setPlayingTrack
  } = props

  const [recentlyPlayed, setRecentlyPlayed] = useState([])

  useEffect(
    () => {
      if (!playingTrack) return;
      setRecentlyPlayed([...recentlyPlayed, playingTrack])
    }, [playingTrack])

  const handleClear = () => {
    setRecentlyPlayed([])
  }

  const handleClick = (song) => {
    setPlayingTrack(song)
  }

  return (
    <div className='body_left_container'>

      {recentlyPlayed?.length >= 1 && (
        <div className='recently_played_header'>
          <h3>Recently played</h3>
          <h5 onClick={handleClear}>Clear</h5>
        </div>
      )}
      <div className='recently_played_list'>
        {recentlyPlayed.map((song, i) => (
          <div
            className='recently_played_song'
            onClick={() => { handleClick(song) }}
            key={i}
          >
            <img src={song.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="recently_played_info">
              <div className="recently_primary">{song.title}</div>
              <div>{song.artist}</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default RecentlyPlayed
