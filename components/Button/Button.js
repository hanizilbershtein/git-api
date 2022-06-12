import React from 'react'
import Print from '../Print/Print'

const Button = ({text,clickEvent,user,isSearch,}) => {
    console.log(user);

  return(
    <>
  <button onClick={clickEvent}>{text}</button>
  {isSearch ?(user.map(e=>
    <Print avatar_url={e.avatar_url} 
           login={e.login} 
           created_at={e.created_at.split("T")[0]} 
           public_repos={e.public_repos} 
           deleteclick ={(e)=>{
               const remove=e.target.parentElement.remove()
               //console.log(remove);
              // console.log(user);
           }}
           
           />
           
           )
           ):("")} 
           
  
    </>
    ) 
}
  
  


export default Button