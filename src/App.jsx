import { useEffect } from 'react'
import './App.css'
import LoginButton from "./components/G_login";
import LogoutButton from "./components/G_logout";
import { gapi } from 'gapi-script';

const clientId = "159456186171-3os5dukvvopj3t40no6p613dvarhpj19.apps.googleusercontent.com";


function App() {

  useEffect(() => {

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start);
  }
  );

  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
