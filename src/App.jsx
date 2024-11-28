import { useState, useEffect } from 'react'
import './App.css'
import MainForm from "./components/Main_form";

import { gapi } from 'gapi-script';
import { createBrowserRouter } from 'react-router-dom';
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
      <div>
        <MainForm />
      </div>
    </>
  )
}

export default App
