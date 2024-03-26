import React from 'react'
import Cookies from './cookies.jsx'

const getPhrase = ({phrase}) => {
  return (
    <div className='containerCoockie'>
      <Cookies clase = "left "></Cookies>
      <div className='text '>
        <p className='phrase'>{phrase.phrase}</p>
        <p className='author'>{phrase.author}</p>
      </div>
      <Cookies clase = "rigth "></Cookies>
    </div>
    
  )
}

export default getPhrase
