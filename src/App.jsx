import { useState } from 'react'
import './App.css'
import Profile from './components/Profile.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import dataNarendra from './dataNarendra.json'
import Project from './components/Project.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div id="home">
          <Profile data={dataNarendra} />
        </div>
        <div id="skills">
          <Skills data={dataNarendra} />
        </div>
        <div id="experience">
          <Experience data={dataNarendra} />
        </div>
        <div id="projects">
          <Project data={dataNarendra} />
        </div>
      </div>
    </>
  )
}

export default App
