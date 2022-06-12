import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Search from './components/Search/Search';
import Button from './components/Button/Button'
import Print from './components/Print/Print';
import Select from './components/Select/Select';


function App() {
  const [gitUser,setGitUser]= useState("");
  const [searchUser, setSearchUser] =useState("");
  const [user,setUser]=useState([])
  const [isSearch,setIsSearch]= useState(false)
  const [sort,setSort]= useState()
  //const [users, setUsers]=useState([])

 function sortDate(a,b){  
  var dateA = new Date(a.created_at).getTime();
  var dateB = new Date(b.created_at).getTime();
  return dateA > dateB ? 1 : -1;  
};  
function sortName(a,b){
    var textA = a.login.toUpperCase();
    var textB = b.login.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  };
function sortRepose(a,b){
  var repoa = a.public_repos
  var repob = b.public_repos
  return (repoa< repob) ? 1:-1;
}


useEffect(()=>{
    try{async function fetchData(){
      const gitHubApiUrl=`https://api.github.com/users/${searchUser}`
      console.log(gitHubApiUrl);
      if(searchUser==="") return;
      const {data}= await axios.get(gitHubApiUrl)
      const {avatar_url,created_at,login,public_repos}=data
      setUser([...user,{avatar_url,created_at,login,public_repos}])
      console.log(avatar_url,created_at,login,public_repos);
    }
    fetchData()}
    catch(e){
      console.log(e);
    }
  },[searchUser])
  return (
    <div >
      <Search setGitUser={setGitUser} gitUser ={gitUser}/>
      <Button
         user={user}
         isSearch={isSearch}
         text = {"search"} 
         clickEvent={()=>{
           setSearchUser(gitUser)
           setIsSearch(true)           
           }} />
      <Button
      //user={user}
      //isSearch={false}
      text = {"reset"}
       clickEvent={()=>{
        setUser([]) 
        console.log("reset")
        }}
        setSearchUser={setSearchUser}

        />

     
      <Select changeSort={(e)=>{
       if(e.target.value==="Name"){
        user.sort(sortName)
        setSearchUser("")
        setUser(user)
       }
       if(e.target.value==="Date"){
        user.sort(sortDate)
        setSearchUser("")
        setUser(user)
       };
       if(e.target.value==="Repositories"){
        user.sort(sortRepose)
        setSearchUser("")
        setUser(user)
       }
        
      }}/>
       

     
    </div>
  );
}

export default App;
