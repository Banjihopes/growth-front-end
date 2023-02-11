import './sidebar.css'
import axios from "axios"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        };
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src="https://media.licdn.com/dms/image/D4D03AQGHSUiUszOe-w/profile-displayphoto-shrink_800_800/0/1668169730704?e=1678320000&v=beta&t=rHUl5mXafg3X5vdcci-sjlC2nxeQC0eGqVImWTccPGA" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed perferendis eius, dolores error odio placeat quas consequuntur! Voluptatum sint tempore vero velit? Nemo molestiae expedita quasi molestias hic, dolore magnam?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <Link to={`/?cat=${cats.name}`} className="link">
                        {cats.map((c) => (
                            <li className="sidebarListItem">{c.name}</li>
                        ))}
                    </Link>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocials">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
