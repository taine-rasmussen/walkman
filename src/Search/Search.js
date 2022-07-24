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
  const [topResults, setTopResults] = useState([])

  const chooseTrack = (track) => {
    console.log(track)
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

  useEffect(
    () => {
      if (searchResults.length < 1) return;
      setTopResults(searchResults.slice(0, 5))
    }, [searchResults])

  return (
    <Container>
      <Form.Control
        type="Search"
        placeholder="Search Songs/Artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search_input"
      />
      <div
        className="results_container"
        style={search ? { boxShadow: '0px 0px 4px 0px #fff' } : null}
      >
        < TrackSearchResults
          searchResults={searchResults}
          chooseTrack={chooseTrack}
          topResults={topResults}
        />
      </div>
    </Container>
  )
}

export default Search
