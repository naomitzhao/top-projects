/* eslint-disable react/prop-types */
import './App.css'

export default function BasicInfo({content}) {
    console.log(content);
    return (
        <form>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input name="fullName" value={content.name}></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input name="email" value={content.email}></input>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input name="phone" value={content.phone}></input>
            </div>
        </form>
    )
}

