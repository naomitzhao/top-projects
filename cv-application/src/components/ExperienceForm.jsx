export default function ExperienceForm ({ onChange, experience, setExperience }) {
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

    return (experience.map((item) => {
        return (
            <div key={"exp" + item.key}>
                <div>
                    <label htmlFor={"title" + item.key}>Position Title</label>
                    <input name="title" id={"title" + item.key} defaultValue={item.title} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"expName" + item.key}>Company/Organization</label>
                    <input name="name" id={"expName" + item.key} defaultValue={item.name} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"startDate" + item.key}>Start Date</label>
                    <input name="startDate" id={"startDate" + item.key} defaultValue={item.startDate} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"endDate" + item.key}>End Date</label>
                    <input name="endDate" id={"endDate" + item.key} defaultValue={item.endDate} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"description" + item.key}>Description</label>
                    <textarea name="description" id={"description" + item.key} defaultValue={item.description} onChange={onChange}></textarea>
                </div>
                <button className="deleteButton" onClick={(e) => {
                  e.preventDefault();
                  deleteExperience(item.key);
                }}>Delete Experience</button>
            </div>
        );
    }))
}