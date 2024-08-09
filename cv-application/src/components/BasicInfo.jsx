/* eslint-disable react/prop-types */
import '../styles/App.css'
import { TextInput } from './Inputs'

export default function BasicInfo({content}) {
    
    return (
        <form>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <TextInput name="fullName" defaultValue={content.name}></TextInput>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <TextInput name="email" defaultValue={content.email}></TextInput>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <TextInput name="phone" defaultValue={content.phone}></TextInput>
            </div>
        </form>
    )
}

