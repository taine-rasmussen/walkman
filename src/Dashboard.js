import { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from './useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: 'ee877ff172d84549ba81bbc86cd28478',
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(
    () => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

  useEffect(
    () => {
      if (!search) return setSearchResults([])
      if (!accessToken) return

      spotifyApi.searchTracks(search).then(res => {
        console.log(res)
      })
    }, [search, accessToken])

  return (
    <Container
      className="d-flex flex-column py-2"
      style={{ height: '100vh' }}
    >
      <Form.Control
        type="Search"
        placeholder="Search Songs/Artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div
        className="flex-grow-1 my-2"
        style={{ overflowY: 'auto' }}
      >
      </div>
    </Container>
  )
}

export default Dashboard
