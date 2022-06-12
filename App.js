import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Search from './components/Search/Search';
import Button from './components/Button/Button'
import Print from './components/Print/Print';


function App() {
  const [gitUser,setGitUser]= useState("");
  const [searchUser, setSearchUser] =useState("");
  const [user,setUser]=useState([])
  const [isSearch,setIsSearch]= useState(false)
  const [sort,setSort]= useState()
  //const [users, setUsers]=useState([])

 function sortFunction(a,b){  
  var dateA = new Date(a.created_at).getTime();
  var dateB = new Date(b.created_at).getTime();
  return dateA > dateB ? 1 : -1;  
};  

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
      text = {"reset"} clickEvent={()=>{
        setUser([])
        
        console.log("reset")}}
        />
      <Button
      text={"sort"}
      isSearch={false}

      clickEvent={(e)=>{
       // const dates=[];
        user.sort(sortFunction)
        setUser(user)
        console.log(user);
        console.log(isSearch);
        user.map(el=>
          <Print 
            avatar={el.avatar_url}
            login={el.login}
            create={el.created_at}
            repo={el.public_repos}
            deleteClick={(e)=>{console.log(e.target)
              e.target.parentElement.remove()
              //console.log(user);
            }
            }
            />
        )
      }}
      
      />
       

     
    </div>
  );
}

export default App;
