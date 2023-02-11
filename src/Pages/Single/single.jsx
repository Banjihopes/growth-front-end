import Sidebar from '../../Components/Sidebar/sidebar'
import SinglePost from '../../Components/SinglePost/singlepost'
import './single.css'

export default function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
