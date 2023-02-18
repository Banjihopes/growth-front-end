import Post from '../Post/post'
import './posts.css'

export default function Posts({ posts }) {
    // Get an array of the keys in the posts object
    const postArray = Object.keys(posts);

    // Loop through that array using each key to get the value
    const postData = postArray.map(key => {
        const value = posts[key];

        // Perform desired logic and return a new value
        return <Post key={value.id} post={value} />;
    });

    return (
        <div className="posts">
            {postData}
        </div>
    );
}





