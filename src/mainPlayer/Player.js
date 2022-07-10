import SpotifyPlayer from 'react-spotify-web-playback'
import { useState, useEffect } from 'react'

const Player = (props) => {
  const {
    accessToken,
    trackUri
  } = props

  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null

  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        bgColor: '#181818',
        color: '#BABABA',
        loaderColor: '#fff',
        sliderColor: '#1DD05D',
        trackArtistColor: '#BABABA',
        trackNameColor: '#BABABA',
      }}
      style={{ padding: '20px' }}
    />
  )
}

export default Player
