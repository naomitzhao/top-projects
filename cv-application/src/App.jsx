// import { useState } from 'react'
import './App.css'
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';

function App() {
  console.log("hello world :3");

  return (
    <>
      <div id="formContainer">
        <div id="basicInfo">
          <BasicInfo />
        </div>
        <div id="education">
          <button>Add Education</button>
          <Education />
        </div>
        <div id="experience">
          <button>Add Experience</button>
          <Experience />
        </div>
      </div>
      <div id="resumeContainer"></div>
    </>
  )
}

export default App
