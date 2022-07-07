import { Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import useAuth from './useAuth';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Form.Control
        type="Search"
        placeholder="Search Songs/Artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </Container>
  )
}

export default Dashboard
