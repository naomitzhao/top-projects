/* eslint-disable react/prop-types */
export default function Resume({ basicInfo, education, experience }) {
    return (
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
                    <p>{item.title}</p>
                    <p>{(item.startDate || item.endDate)? item.startDate + ' - ' + item.endDate : ""}</p>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
}