import { useEffect } from 'react'
import './App.css'
import MainForm from "./components/Main_form";
import Profession from './components/Profession';
import QuestionBox from './components/QuestionBox';
import CompletedTask from './components/completed_task';
import Dashboard from './components/Dashboard';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
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
        <Router>

          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<MainForm />} />
            <Route path="/profession" element={<Profession />} />
            <Route path="/question-box" element={<QuestionBox />} />
            <Route path="/completed-task" element={<CompletedTask />} />
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
