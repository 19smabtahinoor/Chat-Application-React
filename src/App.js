import React, { useState,useEffect } from 'react';
import Messege from './components/Messege';
import db from './firebase/firebase';
import {Button} from '@material-ui/core'

function App() {
  const [input, setInput] = useState("")
  const [messeges, setMessege] = useState([])
  const [userName,setUserName] = useState()
  const time = new Date().toLocaleTimeString()

  useEffect( () => {
    db.collection('messeges').onSnapshot( snapshot => {
      setMessege(snapshot.docs.map( doc => doc.data()))
    })
  },[])

  useEffect(() => {
    setUserName(prompt("Enter your name:"))
  }, [])
  
  const sendMessege = (event) => {

    db.collection('messeges').add( {
      messege:input,
      username:userName
    })
    setMessege([...messeges, {username:userName,messege:input,messegeTime:time}])
    setInput("")
  }

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

      {/* Display Messeges */}
      <div>
        {
          messeges.map((messege,index) => (
            // <Messege key={index} text={messege.text} username={messege.username} time={messege.messegeTime}/>

            <Messege username={userName} messege={messege}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
