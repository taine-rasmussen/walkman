import React from 'react'
import { BsSpotify } from 'react-icons/bs'

import './Body.css'

const Body = (props) => {

  return (
    <div className='body_container'>
      <div className='spinner'>
        <BsSpotify />
      </div>
    </div>
  )
}

export default Body
