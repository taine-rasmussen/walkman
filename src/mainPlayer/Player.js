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
    />
  )
}

export default Player
