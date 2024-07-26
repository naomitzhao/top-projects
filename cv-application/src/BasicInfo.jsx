import './App.css'

export default function BasicInfo() {
    return (
        <form>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input name="fullName"></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input name="email"></input>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input name="phone"></input>
            </div>
        </form>
    )
}

