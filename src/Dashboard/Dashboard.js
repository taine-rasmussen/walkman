import { useState } from 'react'
import Player from '../mainPlayer/Player'
import Search from '../Search/Search'
import useAuth from '../Login/useAuth'
import './Dashboard.css'

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)

  const [playingTrack, setPlayingTrack] = useState()

  return (
    <div className="dashboard_container">
      <Search
        setPlayingTrack={setPlayingTrack}
        accessToken={accessToken}
      />
      <div className="dashboard_footer">
        <Player
          accessToken={accessToken}
          trackUri={playingTrack?.uri}
        />
      </div>
    </div>
  )
}

export default Dashboard
