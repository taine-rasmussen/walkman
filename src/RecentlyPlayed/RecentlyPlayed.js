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
      <div className='recently_played_header'>
        <h3>Recently played</h3>
        <MdClear onClick={handleClear} className='clear' />
      </div>
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
  )
}

export default RecentlyPlayed
