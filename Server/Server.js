const express = require('express')
const spoitfyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'https://localhost:3000',
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expires: data.body.expires_in
      })
    }).catch(() => {
      res.sendStatus(400)
    })
})

app.listen(3001)