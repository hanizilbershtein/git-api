import React from 'react'
import './Print.css'

const Print = ({avatar_url,login,created_at,public_repos,deleteclick,setUser}) => {
    
  return (
      <div className='user'>
    <img src={avatar_url} className="pic"></img>
    <h1 className="login">{login}</h1>
    <h2 className="create">created_at:{created_at}</h2>
    <div className='repo'>{public_repos} <br/>Repositories</div>
    <button onClick={deleteclick} className="del" >delete</button>
    </div>
  )
}

export default Print