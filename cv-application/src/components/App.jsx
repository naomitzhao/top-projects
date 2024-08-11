/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../styles/App.css';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Resume from './Resume';

function App() {
  const exampleData = {
    basicInfo: {
      name: "Naomi Zhao",
      email: "naomitan.zhao@gmail.com",
      phone: "(925) 914-0386"
    },
    education: [
      {
        name: "University of California, Davis", 
        startDate: "Sep 2022", 
        endDate: "Jun 2026", 
        degree: "B.S.", 
        area: "Computer Science and Engineering", 
        key: 0
      }, 
      {
        name: "College of San Mateo", 
        startDate: "Jun 2024", 
        endDate: "Aug 2024", 
        degree: "", 
        area: "",
        key: 1
      }, 
      {
        name: "Duke University Online Courses", 
        startDate: "Aug 2021", 
        endDate: "Aug 2021", 
        degree: "", 
        area: "", 
        key: 2
      },
    ],
    experience: [
      {
        name: "The Odin Project", 
        title: "Personal Projects", 
        startDate: "", 
        endDate: "", 
        description: "Various full-stack Javascript web applications.", 
        key: 0
      },
      {
        name: "#include at Davis", 
        title: "Web Developer",
        startDate: "Oct 2023", 
        endDate: "Mar 2024", 
        description: "Develop responsive front-end with React, HTML, SCSS, Javascript, and Next.js for UC Davis organization Best Buddies", 
        key: 1
      }, 
      {
        name: "Google Developers Student Club", 
        title: "Tech Lead", 
        startDate: "Oct 2022", 
        endDate: "Jun 2023", 
        description: "Collaborated in a team of developers to develop full-stack mobile applications.", 
        key: 2
      }, 
      {
        name: "Girls Who Code", 
        title: "Python Mentor", 
        startDate: "Aug 2019", 
        endDate: "May 2022", 
        description: "Taught self-written curriculum in weekly Python workshops.", 
        key: 3
      }
    ]
  };
  // state for name, email, phone
  const [basicInfo, setBasicInfo] = useState(
    // {
    //   name: "",
    //   email: "",
    //   phone: ""
    // }
    exampleData.basicInfo
  )

  // state for list of education
  const [education, setEducation] = useState(
    // [
    //   {
    //     name: "",
    //     startDate: "", 
    //     endDate: "", 
    //     degree: "", 
    //     area: "",
    //     key: 0
    //   }
    // ]
    exampleData.education
  )

  // state for list of experience
  const [experience, setExperience] = useState(
    // [
    //   {
    //     name: "", 
    //     title: "",
    //     startDate: "", 
    //     endDate: "", 
    //     description: "", 
    //     key: 0
    //   }
    // ]
    exampleData.experience
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
        title: frm[i].value, 
        name: frm[i + 1].value, 
        startDate: frm[i + 2].value, 
        endDate: frm[i + 3].value, 
        description: frm[i + 4].value, 
        key: frm[i].id.slice(5)
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
      title: "", 
      startDate: "", 
      endDate: "", 
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
            <BasicInfoForm basicInfo={basicInfo} onChange={(e) => { updateBasicInfo(e); }}></BasicInfoForm>
          </div>
          <div id="education">
            <button onClick={ () => { addEducation(); } }>Add Education</button>
            <EducationForm education={education} setEducation={setEducation} onChange={(e) => { updateEducation(e); }}></EducationForm>
          </div>
          <div id="experience">
            <button onClick={ () => { addExperience(); } }>Add Experience</button>
            <ExperienceForm experience={experience} setExperience={setExperience} onChange={(e) => { updateExperience(e); }}></ExperienceForm>
          </div>
        </div>
      </div>
      <Resume basicInfo={basicInfo} education={education} experience={experience}></Resume>
    </main>
  )
}

export default App
