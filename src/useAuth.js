import { useEffect, useState } from 'react'

const useAuth = (code) => {

  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()


  useEffect(() => {

  }, [])

}

export default useAuth
