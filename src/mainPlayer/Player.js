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
        activeColor: '#fff',
        bgColor: '#fff',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#fff',
        trackArtistColor: '#fff',
        trackNameColor: '#fff',
      }}
    />
  )
}

export default Player
