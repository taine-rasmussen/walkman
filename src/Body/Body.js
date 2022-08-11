import { BsSpotify } from 'react-icons/bs'

import './Body.css'
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed'

const Body = (props) => {
  const {
    playingTrack
  } = props

  return (
    <div className='body_container'>
      <RecentlyPlayed playingTrack={playingTrack} />
      <div className='pulse'>
        <BsSpotify />
      </div>
    </div>
  )
}

export default Body

// TODO
// - Style scroll bar on overflow
// - Clear btn
// - CLicking song plays it
// - Conditional rendering of list before anything has played
// - Refactor into own componet - Done
