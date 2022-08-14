import { BsSpotify } from 'react-icons/bs'

import './Body.css'
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed'

const Body = (props) => {
  const {
    playingTrack,
    setPlayingTrack
  } = props

  return (
    <div className='body_container'>
      <RecentlyPlayed
        playingTrack={playingTrack}
        setPlayingTrack={setPlayingTrack}
      />
      <div className='pulse'>
        <BsSpotify />
      </div>
    </div>
  )
}

export default Body
