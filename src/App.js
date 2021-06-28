import React from 'react';
import ChatRoom from './components/ChatRoom'
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();

  return (
    <>
   <button onClick={() => loginWithRedirect()}>Log In</button>
   <button onClick={() => logout ({ returnTo: window.location.origin })}>Log Out</button>

    {isAuthenticated && <ChatRoom />}


    </>
  )
}

export default App;
