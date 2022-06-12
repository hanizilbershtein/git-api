import React from 'react'
import './Print.css'

const Print = ({avatar_url,login,created_at,public_repos,deleteclick,setUser}) => {
    
  return (
      <div className='print'>
    <img src={avatar_url}></img>
    <h1>{login}</h1>
    <h2>created_at:{created_at}</h2>
    <div className='repos'>{public_repos} <br/>Repositories</div>
    <button onClick={deleteclick}>delete</button>
    </div>
  )
}

export default Print