/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Experience from './Experience';

function App() {
  // state for name, email, phone
  const [basicInfo, setBasicInfo] = useState(
    {
      name: "",
      email: "",
      phone: ""
    }
  )

  // state for list of education
  const [education, setEducation] = useState(
    [
      {
        name: "",
        startDate: "", 
        endDate: "", 
        degree: "", 
        area: "",
        key: 0
      }
    ]
  )

  // state for list of experience
  const [experience, setExperience] = useState(
    [
      {
        name: "", 
        position: "",
        startDate: "", 
        endDate: "", 
        description: "", 
        key: 0
      }
    ]
  );

  // update basic info based on form
  const updateBasicInfo = (e) => {
    setBasicInfo({
      name: e.target.form[0].value,
      email: e.target.form[1].value, 
      phone: e.target.form[2].value
    })
  }

  // update education based on form
  const updateEducation = (e) => {
    const newEdu = [];
    const frm = e.target.form;
    for (let i = 0; i < frm.length - 1; i += 7) {
      newEdu.push({
        name: frm[i].value, 
        startDate: frm[i + 1].value, 
        endDate: frm[i + 2].value, 
        degree: frm[i + 3].value, 
        area: frm[i + 4].value, 
        description: frm[i + 5].value,
        key: frm[i].id.slice(7)
      });
    }
    setEducation(newEdu);
  };

  // update experience based on form
  const updateExperience = (e) => {
    const newExp = [];
    const frm = e.target.form;
    for (let i = 0; i < frm.length - 1; i += 6) {
      newExp.push({
        name: frm[i].value, 
        title: frm[i + 1].value, 
        startDate: frm[i + 2].value, 
        endDate: frm[i + 3].value, 
        description: frm[i + 4].value, 
        key: frm[i].id.slice(7)
      });
    }
    setExperience(newExp);
  };

  // delete an education given a key
  const deleteEducation = (key) => {
    const newEdu = [];
    for (let i = 0; i < education.length; i ++) {
      if (education[i].key != key) {
        newEdu.push(education[i]);
      }
    }
    setEducation(newEdu);
  }

  // delete an experience given a key
  const deleteExperience = (key) => {
    const newExp = [];
    for (let i = 0; i < experience.length; i ++){
      if (experience[i].key != key) {
        newExp.push(experience[i]);
      }
    }
    setExperience(newExp);
  }

  const addEducation = () => {
    const newEdu = [];
    for (let i = 0; i < education.length; i ++) {
      newEdu.push(education[i]);
    }
    newEdu.push({
      name: "", 
      startDate: "", 
      endDate: "", 
      degree: "", 
      area: "",
      description: "",
      key: (education.length != 0) ? education[education.length - 1].key + 1 : 0
    });
    setEducation(newEdu);
  }

  const addExperience = () => {
    const newExp = [];
    for (let i = 0; i < experience.length; i ++) {
      newExp.push(experience[i]);
    }
    newExp.push({
      name: "", 
      startDate: "", 
      endDate: "", 
      degree: "", 
      area: "", 
      description: "",
      key: (experience.length != 0) ? experience[experience.length - 1].key + 1 : 0
    });
    setExperience(newExp);
  }

  // useEffect for debugging
  useEffect(() => {
    console.log(education);
    console.log(experience);
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
                    <input name="fullName" id="fullName" defaultValue={basicInfo.name}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" defaultValue={basicInfo.email}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" defaultValue={basicInfo.phone}></input>
                </div>
              </div>

              <button type="submit" onClick={(e) => {
                e.preventDefault();
                updateBasicInfo(e);
              }}>Update Basic Info</button>
            </form>
          </div>
          <div id="education">
            <button onClick={ () => { addEducation(); } }>Add Education</button>
            <form>
            { education.map((item) => {
              return <div key={"edu" + item.key} className="educationSection">
                  <div>
                      <label htmlFor={"eduName" + item.key}>Institution Name</label>
                      <input name="institutionName" id={"eduName" + item.key} defaultValue={item.name}></input>
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
                  <button className="deleteButton" onClick={(e) => {
                    e.preventDefault();
                    deleteEducation(item.key);
                  }}>Delete Education</button>
              </div>
            })}
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                updateEducation(e);
              }}>Update Education</button>
          </form>
          </div>
          <div id="experience">
            <button onClick={ () => { addExperience(); } }>Add Experience</button>
            <form>
              { experience.map((item) => {
                  return (
                      <div key={"exp" + item.key}>
                          <div>
                              <label htmlFor={"expName" + item.key}>Company/Organization</label>
                              <input name="name" id={"expName" + item.key} defaultValue={item.name}></input>
                          </div>
                          <div>
                              <label htmlFor="title">Position Title</label>
                              <input name="title" defaultValue={item.position}></input>
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
                              <label htmlFor="description">Description</label>
                              <textarea name="description" defaultValue={item.description}></textarea>
                          </div>
                          <button className="deleteButton" onClick={(e) => {
                            e.preventDefault();
                            deleteExperience(item.key);
                          }}>Delete Experience</button>
                      </div>
                  );
              })}
              <button type="submit" onClick={(e) => {
                e.preventDefault();
                updateExperience(e);
              }}>Update Experience</button>
            </form>
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
              { education.length && <h2>Education</h2>}
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
              { experience.length && <h2>Experience</h2> }
              {experience.map((item) => {
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
