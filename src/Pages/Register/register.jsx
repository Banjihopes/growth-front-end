import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="regTitle">Register</span>
            <form className="regForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="regInput"
                    placeholder="Enter your username..."
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    className="regInput"
                    placeholder="Enter your email..."
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="regInput"
                    placeholder="Enter your password..."
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="regButton" type="submit">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </form>
            <button className="regLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something is not right!</span>}
        </div>
    )
}
