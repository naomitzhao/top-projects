/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../styles/App.css';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Resume from './Resume';

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
  // useEffect(() => {
  //   console.log(education);
  //   console.log(experience);
  // })

  return (
    <main>
      <div id="formContainerContainer">
        <div id="formContainer">
          <div id="basicInfo">
            <form>
              <BasicInfoForm basicInfo={basicInfo} onChange={(e) => { updateBasicInfo(e); }}></BasicInfoForm>
            </form>
          </div>
          <div id="education">
            <button onClick={ () => { addEducation(); } }>Add Education</button>
            <form>
            <EducationForm education={education} setEducation={setEducation} onChange={(e) => { updateEducation(e); }}></EducationForm>
          </form>
          </div>
          <div id="experience">
            <button onClick={ () => { addExperience(); } }>Add Experience</button>
            <form>
              <ExperienceForm experience={experience} setExperience={setExperience} onChange={(e) => { updateExperience(e); }}></ExperienceForm>
            </form>
          </div>
        </div>
      </div>
      <Resume basicInfo={basicInfo} education={education} experience={experience}></Resume>
    </main>
  )
}

export default App
