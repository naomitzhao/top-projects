/* eslint-disable react/prop-types */
export default function SkillsForm({ onChange, skills }) {
    return (
        <form>
            <div>
                <label htmlFor="skillsInput">Skills</label>
                <textarea name="skillsInput" id="skills" defaultValue={skills} onChange={onChange}></textarea>
            </div>
        </form>
    )
}