import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {

    const userRef = userRef()
    const passwordRef = userRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={userRef}
                />
                <button className="loginButton">
                    <Link className="link" to="/login" type="submit">Login</Link>
                </button>
            </form>
            <button className="loginRegButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}
