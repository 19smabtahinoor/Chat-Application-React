import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("")
  const [messeges, setMessege] = useState([])

  const sendMessege = (event) => {
    setMessege([...messeges, input])
    setInput("")
  }

  return (
    <div className="App">
        <input
          type="text"
          placeholder="Write Messege"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button type="button" onClick={() => sendMessege()}>Send Messege</button>

      {/* Display Messeges */}
      <div>
        {
          messeges.map(messege => (
            <h3>{messege}</h3>
          ))
        }
      </div>
    </div>
  );
}

export default App;
