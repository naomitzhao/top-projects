/* eslint-disable react/prop-types */
import '../styles/App.css'
import { TextInput, TextareaInput } from './Inputs'

export default function Education ({content}) {
    // console.log(content);
    return (
        <form>
            {content.map((item) => {
                    <div key={item.key} className="educationSection">
                        <div>
                            <label htmlFor="institutionName">Institution Name</label>
                            <TextInput name="institutionName" defaultValue={item.name}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="startDate">Start Date</label>
                            <TextInput name="startDate" defaultValue={item.startDate}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="endDate">End Date</label>
                            <TextInput name="endDate" defaultValue={item.endDate}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="degree">Degree</label>
                            <TextInput name="degree" defaultValue={item.degree}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="area">Area of Study</label>
                            <TextInput name="area" defaultValue={item.area}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <TextareaInput name="description" defaultValue={item.description}></TextareaInput>
                        </div>
                        <button className="deleteButton">Delete Education</button>
                    </div>
                
            })}
        </form>
    );
}