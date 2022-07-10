import { MusicContext } from '../MusicContext'
import { useState } from 'react'
import Player from '../mainPlayer/Player'
import Search from '../Search/Search'

const Dashboard = ({ code }) => {

  const [playingTrack, setPlayingTrack] = useState()

  return (
    <MusicContext.Provider
    >
      <Search
        setPlayingTrack={setPlayingTrack}
        code={code}
      />
      <div>
        <Player />
      </div>
    </MusicContext.Provider >
  )
}

export default Dashboard
