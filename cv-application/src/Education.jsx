import './App.css'

export default function Education () {
    return (
        <form>
            <div>
                <label htmlFor="institutionName">Institution Name</label>
                <input name="institutionName"></input>
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
                <label htmlFor="degree">Degree</label>
                <input name="degree"></input>
            </div>

            <div>
                <label htmlFor="area">Area of Study</label>
                <input name="area"></input>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description"></textarea>
            </div>
        </form>
    );
}