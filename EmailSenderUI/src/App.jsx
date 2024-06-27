import { useEffect, useState } from 'react'
import './App.css'
import SendEmail from './Components/SendEmail';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {

  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [loggedUser, setLoggedUser] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('User', 
      JSON.stringify({
        email : "abc@def.com",
        addedOn : new Date()
      }));
    localStorage.removeItem('User');
    var user = JSON.parse(localStorage.getItem('User'));

    let addedBeforTimeInHour = undefined;

    if(user)
      addedBeforTimeInHour = (new Date().getTime() - new Date(user.addedOn).getTime()) / (1000 * 60 * 24)  

    if(!addedBeforTimeInHour || addedBeforTimeInHour > 24){
      localStorage.removeItem('Name');
      setIsLoggedIn(false)
      setLoggedUser(null)
    }
    else{
      setIsLoggedIn(true)
      setLoggedUser(user)
    }
  },[])


  useEffect(() => {
    if(!isLoggedIn)
      navigate('/login')
    else
      navigate('home')
  },[setIsLoggedIn])

  return (
    <Outlet />
  )
}

export default App
