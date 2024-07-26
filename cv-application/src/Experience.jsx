import './App.css'

export default function Experience () {
    return (
        <form>
            <div>
                <label htmlFor="org">Company/Organization</label>
                <input name="org"></input>
            </div>

            <div>
                <label htmlFor="title">Position Title</label>
                <input name="title"></input>
            </div>

            <div>
                <label htmlFor="startDate">Start Date</label>
                <input name="startDate"></input>
            </div>

            <div>
                <label htmlFor="endDate">End Date</label>
                <input name="endDate"></input>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description"></textarea>
            </div>
        </form>
    );
}