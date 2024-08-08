import { useState } from 'react';
// import { jsPDF } from "jspdf";
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState({
    basicInfo: {
      name: "naomi z",
      email: "naomiz.zzzzz@zmail.com",
      phone: "(555) 555-5555"
    }, 
    education: [
      {
        name: "University of California, Davis",
        startDate: "Sep 2022", 
        endDate: "Jun 2026", 
        degree: "B.S.", 
        area: "Computer Science and Engineering"
      }
    ],
    experience: [
      {
        name: "Personal Projects", 
        position: "",
        startDate: "", 
        endDate: "", 
        description: "i make yay"
      }, 
      {
        name: "#include at Davis", 
        position: "Web Developer",
        startDate: "Oct 2023", 
        endDate: "Mar 2024", 
        description: "blah blah blah"
      }
    ],
  });

  return (
    <main>
      <div id="formContainerContainer">
        <div id="formContainer">
          <div id="basicInfo">
            <BasicInfo content={content.basicInfo}/>
          </div>
          <div id="education">
            <button>Add Education</button>
            <Education content={content.education}/>
          </div>
          <div id="experience">
            <button>Add Experience</button>
            <Experience content={content.experience}/>
          </div>
        </div>
      </div>
      <div id="resumeContainer">
        <div id="resume">
          <div id="resumeContent">
            <div id="resumeBasicInfo">
              <h1>{content.basicInfo.name}</h1>
              <p>{content.basicInfo.email}</p>
              <p>{content.basicInfo.phone}</p>
            </div>
            <div id="resumeEducation">
              <h2>Education</h2>
              {content.education.map((item) => {
                return(
                  <div key={item.key}>
                    <h3>{item.name}</h3>
                    <p>{(item.startDate || item.endDate)? item.startDate + ' - ' + item.endDate : ""}</p>
                    <p>{item.degree}{(item.area != "")? ' in ' : ''}{item.area}</p>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
            <div id="resumeExperience">
              <h2>Experience</h2>
              {content.experience.map((item) => {
                return(
                  <div key={item.key}>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                    <p>{(item.startDate || item.endDate)? item.startDate + ' - ' + item.endDate : ""}</p>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
