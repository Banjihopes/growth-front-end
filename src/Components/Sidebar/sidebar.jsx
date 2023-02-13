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
                <p className='sidebarText'>Growthpal is more than just a website - it's a comprehensive, all-in-one platform that provides a wealth of information and resources to help you grow and succeed in every aspect of life. Our focus is on empowering individuals to make positive, meaningful changes in their lives by providing expert guidance and cutting-edge information.

                    At Growthpal, we understand that success isn't just about financial stability or career advancement. It's about holistic growth and development in all areas of life - including health, relationships, personal growth, and more. That's why we offer a wide range of content and resources designed to help you transform your life and reach your full potential.

                    Whether you're a young professional looking to get ahead in your career, a seasoned entrepreneur seeking to grow your business, or simply someone looking for guidance and support in life, Growthpal has you covered. Our team of experts and writers are dedicated to providing you with the latest insights, tips, and strategies for success in finance, business, and career development.

                    In addition to our informative articles, Growthpal also offers a variety of tools and resources to help you take control of your life. From budgeting and financial planning tools to resume building resources and career assessments, we've got you covered.

                    At Growthpal, our mission is to help you transform your life and reach your full potential. We believe that everyone has the potential to achieve greatness, and we're here to help you get there. Whether you're just starting out or you're looking to take your life to the next level, Growthpal is your one-stop source for all things transformative and informational.

                    So if you're ready to take control of your life and start growing, visit Growthpal today and start your journey to success!</p>
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
