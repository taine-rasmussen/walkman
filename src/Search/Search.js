import { useState, useEffect } from 'react'
import TrackSearchResults from './TrackSearchResults'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import './Search.css'

const Search = ({ setPlayingTrack, accessToken }) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: 'ee877ff172d84549ba81bbc86cd28478',
  })

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setSearch('');
  }

  useEffect(
    () => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
    }, [accessToken, spotifyApi])

  useEffect(
    () => {
      if (!search) return setSearchResults([])
      if (!accessToken) return
      let cancel = false;

      spotifyApi?.searchTracks(search).then(res => {
        if (cancel) return;
        setSearchResults(
          res.body.tracks.items.map(track => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              track.album.images[0]
            )

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            }
          })
        )
      })
      return () => cancel = true;
    }, [search, accessToken])

  return (
    <Container>
      <Form.Control
        type="Search"
        placeholder="Search Songs/Artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="results_container">
        {searchResults?.map(track => (
          <TrackSearchResults
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
            search={search}
          />
        ))}
      </div>
    </Container>
  )
}

export default Search
