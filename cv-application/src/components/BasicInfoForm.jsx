/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function BasicInfoForm ({ onChange, basicInfo }) {
    return (
        <div>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input name="fullName" id="fullName" defaultValue={basicInfo.name} onChange={onChange}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" defaultValue={basicInfo.email} onChange={onChange}></input>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input name="phone" id="phone" defaultValue={basicInfo.phone} onChange={onChange}></input>
            </div>
        </div>
    );
}