/* eslint-disable react/prop-types */
import './App.css'

export default function Education ({content}) {
    // console.log(content);
    return (
        <div>
            {content.map((item) => {
                return (
                        <form key={item.key}>
                        <div>
                            <label htmlFor="institutionName">Institution Name</label>
                            <input name="institutionName" value={item.name}></input>
                        </div>
                        <div>
                            <label htmlFor="startDate">Start Date</label>
                            <input name="startDate" value={item.startDate}></input>
                        </div>
                        <div>
                            <label htmlFor="endDate">End Date</label>
                            <input name="endDate" value={item.endDate}></input>
                        </div>
                        <div>
                            <label htmlFor="degree">Degree</label>
                            <input name="degree" value={item.degree}></input>
                        </div>
                        <div>
                            <label htmlFor="area">Area of Study</label>
                            <input name="area" value={item.area}></input>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={item.description}></textarea>
                        </div>
                        <button>Delete Education</button>
                    </form>
                )
            })}
        </div>
    );
}