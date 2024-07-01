import './App.css'
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  var [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {

    localStorage.setItem('User',
      JSON.stringify({
        email: "abc@def.com",
        addedOn: new Date()
      }));

    var user = JSON.parse(localStorage.getItem('User'));

    let addedBeforTimeInHour = undefined;

    if (user)
    {
      addedBeforTimeInHour = (new Date().getTime() - new Date(user.addedOn).getTime()) / (1000 * 60 * 24)
    }

    if (addedBeforTimeInHour === undefined || addedBeforTimeInHour > 24) {
      localStorage.removeItem('User');
      setLoggedInUser(null)
      console.log("Its false");
    }
    else {
      console.log("Its true");
      setLoggedInUser(user)
    }
  }, [])


  useEffect(() => {
    if (loggedInUser === null) {
      navigate('/login')
    }
    else {
      navigate('/')
    }
  }, [loggedInUser])

  return (
    <Outlet />
  )
}

export default App
