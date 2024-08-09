/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import { jsPDF } from "jspdf";
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [basicInfo, setBasicInfo] = useState(
    {
      name: "naomi z",
      email: "naomiz.zzzzz@zmail.com",
      phone: "(555) 555-5555"
    }
  )
  const [education, setEducation] = useState(
    [
      {
        name: "University of California, Davis",
        startDate: "Sep 2022", 
        endDate: "Jun 2026", 
        degree: "B.S.", 
        area: "Computer Science and Engineering",
        key: 0
      }, 
      {
        name: "Mills High School",
        startDate: "Aug 2018", 
        endDate: "May 2022", 
        degree: "High School Diploma", 
        area: "High School",
        key: 1  
      }
    ]
  )
  const [content, setContent] = useState({
    experience: [
      {
        name: "Personal Projects", 
        position: "",
        startDate: "", 
        endDate: "", 
        description: "i make yay", 
        key: 0
      }, 
      {
        name: "#include at Davis", 
        position: "Web Developer",
        startDate: "Oct 2023", 
        endDate: "Mar 2024", 
        description: "blah blah blah", 
        key: 1
      }
    ],
  });

  const updateBasicInfo = (e) => {
    setBasicInfo({
      name: e.target.form[0].value,
      email: e.target.form[1].value, 
      phone: e.target.form[2].value
    })
  }

  const updateEducation = (e) => {

  }

  useEffect(() => {
    console.log(education);
  })

  return (
    <main>
      <div id="formContainerContainer">
        <div id="formContainer">
          <div id="basicInfo">
            <form>
              <div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" defaultValue={basicInfo.name}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" defaultValue={basicInfo.email}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input name="phone" defaultValue={basicInfo.phone}></input>
                </div>
              </div>

              <button type="submit" onClick={(e) => {
                e.preventDefault();
                updateBasicInfo(e);
              }}>Update Basic Info</button>
            </form>
          </div>
          <div id="education">
            <button>Add Education</button>
            <form>
            { education.map((item) => {
              <p>hi</p>
            })
            }
            { education.map((item) => {
              <div key={item.key} className="educationSection">
                  <div>
                      <label htmlFor="institutionName">Institution Name</label>
                      <input name="institutionName" defaultValue={item.name}></input>
                  </div>
                  <div>
                      <label htmlFor="startDate">Start Date</label>
                      <input name="startDate" defaultValue={item.startDate}></input>
                  </div>
                  <div>
                      <label htmlFor="endDate">End Date</label>
                      <input name="endDate" defaultValue={item.endDate}></input>
                  </div>
                  <div>
                      <label htmlFor="degree">Degree</label>
                      <input name="degree" defaultValue={item.degree}></input>
                  </div>
                  <div>
                      <label htmlFor="area">Area of Study</label>
                      <input name="area" defaultValue={item.area}></input>
                  </div>
                  <div>
                      <label htmlFor="description">Description</label>
                      <textarea name="description" defaultValue={item.description}></textarea>
                  </div>
                  <button className="deleteButton">Delete Education</button>
              </div>
            })}
        </form>
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
              <h1>{basicInfo.name}</h1>
              <p>{basicInfo.email}</p>
              <p>{basicInfo.phone}</p>
            </div>
            <div id="resumeEducation">
              <h2>Education</h2>
              {education.map((item) => {
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
