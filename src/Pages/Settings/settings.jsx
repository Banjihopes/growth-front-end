import './settings.css'
import Sidebar from "../../Components/Sidebar/sidebar"

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/207194/pexels-photo-207194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=''
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Banji' />
                    <label>Email</label>
                    <input type="email" placeholder='banji@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
