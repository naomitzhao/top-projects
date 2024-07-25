export default function Experience () {
    return (
        <form>
            <label htmlFor="org">Company/Organization</label>
            <input name="org"></input>

            <label htmlFor="title">Position Title</label>
            <input name="title"></input>

            <label htmlFor="startDate">Start Date</label>
            <input name="startDate"></input>

            <label htmlFor="endDate">End Date</label>
            <input name="endDate"></input>

            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
        </form>
    );
}