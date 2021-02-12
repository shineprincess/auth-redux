import React from 'react';
import './App.css';
import logo from './logo.svg';

import {auth,provider} from './firebase'

import {useDispatch , useSelector} from 'react-redux'

import {setActiveUser , setUserLogOutState , selectUsername, selectUserEmail} from './features/userSlice'

function App() {

  const dispatch = useDispatch()

  const userName = useSelector(selectUsername)
  const userEmail = useSelector(selectUserEmail)


  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser ({
        userName : result.user.displayName,
        userEmail  : result.user.email
      }))
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState()) 
    }).catch((err) => alert(err.message))                                 //set Everything to null 
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>User Authentication</h1>
        <img src={logo} className="App-logo" alt = "logo"/>

        {
          userName ? (
            <button  className = "btn_style" onClick = {handleSignOut}> Sign Out</button>
          ) : (
            <button className = "btn_style" onClick = {handleSignIn}>Sign In</button>
          )
        }
      </header>
    </div>
  );
}

export default App;
