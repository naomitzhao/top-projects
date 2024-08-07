/* eslint-disable react/prop-types */
import './App.css'
import { TextInput, TextareaInput } from './Inputs'

export default function Experience ({ content }) {
    return (
        <div>
            {content.map((item) => {
                return (
                    <form key={item.key}>
                        <div>
                            <label htmlFor="name">Company/Organization</label>
                            <TextInput name="name" defaultValue={item.name}></TextInput>
                        </div>
                        <div>
                            <label htmlFor="title">Position Title</label>
                            <TextInput name="title" defaultValue={item.position}></TextInput>
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
                            <label htmlFor="description">Description</label>
                            <TextareaInput name="description" defaultValue={item.description}></TextareaInput>
                        </div>
                        <button>Delete Experience</button>
                    </form>
                );
            })}
        </div>
        
    );
}