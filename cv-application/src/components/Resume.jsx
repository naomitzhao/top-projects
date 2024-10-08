import '../styles/Resume.css';

/* eslint-disable react/prop-types */
export default function Resume({ basicInfo, education, experience, skills }) {
    return (
        <div id="resumeContainer">
        <div id="resume">
          <div id="resumeContent">
            <div id="resumeBasicInfo">
              <h1>{basicInfo.name}</h1>
              <div className={"contactInfo"}>
                  {basicInfo.email && <p>{basicInfo.email}</p> }
                  { (basicInfo.email && basicInfo.phone) && <p>-</p> }
                  <p>{basicInfo.phone}</p>
              </div>
              <hr></hr>
            </div>
            <div id="resumeEducation">
              { education.length != 0 && <h2>EDUCATION</h2>}
              { education.length != 0 && <hr></hr> }
              <div id="educationItems">
                  { education.map((item) => {
                    return(
                      <div key={item.key}>
                        <div className={"twoItemLine"}>
                            <h3>{item.name}</h3>
                            <h3>{(item.startDate || item.endDate)? item.startDate + ' - ' + item.endDate : ""}</h3>
                        </div>
                        <div className={"twoItemLine"}>
                            <p>{item.degree}{(item.area != "")? ' in ' : ''}{item.area}</p>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    )
                  }) }
              </div>
            </div>
            <div id="resumeExperience">
              { experience.length != 0 && <h2>EXPERIENCE</h2> }
              { experience.length != 0 && <hr></hr>}
              <div id="experienceItems">
                  { experience.map((item) => {
                    return(
                      <div key={item.key}>
                        <div className={"twoItemLine"}>
                            <h3>{item.title}</h3>
                            <h3>{(item.startDate || item.endDate)? item.startDate + ' - ' + item.endDate : ""}</h3>
                        </div>
                        <div className={"twoItemLine"}>
                            <p className={"companyName"}>{item.name}</p>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    )
                  }) }
              </div>
            </div>
            <div id="resumeSkills">
                { skills.length != 0 && <h2>SKILLS</h2> }
                { skills.length != 0 && <hr></hr>}
                <p>{skills}</p>
            </div>
          </div>
        </div>
      </div>
    )
}