import { useEffect, useState } from 'react'
import Header from '../../Components/Header/header'
import Posts from '../../Components/Posts/posts'
import Sidebar from '../../Components/Sidebar/sidebar'
import './home.css'
import axios from "axios"
import { useLocation } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>

    )
}
