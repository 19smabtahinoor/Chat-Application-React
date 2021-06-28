import React, { useState,useEffect } from 'react';
import Messege from './Messege';
import db from '../firebase/firebase';
import {Button} from '@material-ui/core'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useAuth0 } from "@auth0/auth0-react";

function ChatRoom() {
  const [input, setInput] = useState("")
  const [messeges, setMessege] = useState([])
  const [userName,setUserName] = useState()
  const time = new Date().toLocaleTimeString()
  const { user } = useAuth0()
  const [allUsers,setAllUsers] = useState([])

  useEffect( () => {
    db.collection('messeges')
    .orderBy('timestamp','desc')
    .onSnapshot( snapshot => {
      setMessege(snapshot.docs.map( doc => doc.data()))
    })
  },[])

  useEffect(() => {
    setUserName(user.name)
    // setUserName(prompt("Enter your name:"))
  }, [allUsers])
  

  const sendMessege = (event) => {

    db.collection('messeges').add( {
      messege:input,
      username:userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessege([...messeges, {username:userName,messege:input,messegeTime:time}])
    setInput("")
  }

//   show users
 useEffect(() => {
    db.collection('users')
    .orderBy('timestamp','desc')
    .onSnapshot( snapshot => {
      setAllUsers(snapshot.docs.map( doc => doc.data()))
    })
  }, [])

  //add users to firebase 
  const addUser = (event) => (

    db.collection('users').add( {
      username:user.name,
      userpicture:user.picture,
      useremail:user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  )
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-4xl px-5">Welcome {userName}</h1>
        <input
          className="border border-black-400"
          type="text"
          placeholder="Write Messege"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <Button disabled={!input} className="bg-blue-500 rounded-lg shadow-lg p-5" type="button" onClick={() => sendMessege()}>Send Messege</Button>

        {allUsers.map( (user,index) => {
            return(
            <div className="flex flex-row bg-white shadow-lg rounded-xl p-6" key={index}>
                <img className="rounded-full" src={user.userpicture} alt={user.username} width="50px" height="50px"/>
                <span>{user.username}</span>
            </div>
            )
        })}
        <Button onClick={() => addUser()}>Add Me</Button>

      {/* Display Messeges */}
      <FlipMove>
        {
          messeges.map((messege,index) => (
            // <Messege key={index} text={messege.text} username={messege.username} time={messege.messegeTime}/>

            <Messege key={index} username={userName} messege={messege}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default ChatRoom;
