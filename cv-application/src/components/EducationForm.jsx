export default function EducationForm ( { onChange, education, setEducation } ) {
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

    return (
        education.map((item) => {
            return <div key={"edu" + item.key} className="educationSection">
                <div>
                    <label htmlFor={"eduName" + item.key}>Institution Name</label>
                    <input name="institutionName" id={"eduName" + item.key} defaultValue={item.name} onChange={onChange}></input>
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
                    <label htmlFor={"degree" + item.key}>Degree</label>
                    <input name="degree" id={"degree" + item.key} defaultValue={item.degree} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"area" + item.key}>Area of Study</label>
                    <input name="area" id={"area" + item.key} defaultValue={item.area} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor={"description" + item.key}>Description</label>
                    <textarea name="description" id={"description" + item.key} defaultValue={item.description} onChange={onChange}></textarea>
                </div>
                <button className="deleteButton" onClick={(e) => {
                    e.preventDefault();
                    deleteEducation(item.key);
                }}>Delete Education</button>
            </div>
            })
    );
}