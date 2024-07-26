/* eslint-disable react/prop-types */
import './App.css'

export default function Experience ({ content }) {
    return (
        <div>
            {content.map((item) => {
                return (
                    <form key={item.key}>
                        <div>
                            <label htmlFor="name">Company/Organization</label>
                            <input name="name" value={item.name}></input>
                        </div>
                        <div>
                            <label htmlFor="title">Position Title</label>
                            <input name="title" value={item.position}></input>
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
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={item.description}></textarea>
                        </div>
                        <button>Delete Experience</button>
                    </form>
                );
            })}
        </div>
        
    );
}