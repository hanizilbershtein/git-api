import React from 'react'

const Search = ({setGitUser, gitUser}) => {
  return (
    <input type="text" input={gitUser} onChange={(e)=>setGitUser(e.target.value) } 
    ></input>
  )
}

export default Search