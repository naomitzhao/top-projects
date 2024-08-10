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
                    <label htmlFor="startDate">Start Date</label>
                    <input name="startDate" defaultValue={item.startDate} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input name="endDate" defaultValue={item.endDate} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input name="degree" defaultValue={item.degree} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="area">Area of Study</label>
                    <input name="area" defaultValue={item.area} onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" defaultValue={item.description} onChange={onChange}></textarea>
                </div>
                <button className="deleteButton" onClick={(e) => {
                    e.preventDefault();
                    deleteEducation(item.key);
                }}>Delete Education</button>
            </div>
            })
    );
}