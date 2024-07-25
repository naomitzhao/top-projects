export default function Education () {
    return (
        <form>
            <label htmlFor="institutionName">Institution Name</label>
            <input name="institutionName"></input>

            <label htmlFor="startDate">Start Date</label>
            <input name="startDate"></input>

            <label htmlFor="endDate">End Date</label>
            <input name="endDate"></input>

            <label htmlFor="degree">Degree</label>
            <input name="degree"></input>

            <label htmlFor="area">Area of Study</label>
            <input name="area"></input>

            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
        </form>
    );
}