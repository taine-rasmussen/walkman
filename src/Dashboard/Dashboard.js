import { MusicContext } from '../MusicContext'
import { useState } from 'react'
import Player from '../mainPlayer/Player'
import Search from '../Search/Search'
import useAuth from '../Login/useAuth'

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)

  const [playingTrack, setPlayingTrack] = useState()

  return (
    <MusicContext.Provider
      value={
        'nothing'
      }
    >
      <Search
        setPlayingTrack={setPlayingTrack}
        accessToken={accessToken}
      />
      <div>
        <Player
          accessToken={accessToken}
          trackUri={playingTrack?.uri}
        />
      </div>
    </MusicContext.Provider >
  )
}

export default Dashboard
