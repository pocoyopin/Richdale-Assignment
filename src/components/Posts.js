import React, {useState, useEffect} from 'react';
import './Posts.css';

function Posts(props) {
    const [isLoaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const ac = new AbortController();
        const fetchPosts = async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.userId}`, {signal: ac.signal});
            const data = await res.json();
            setLoaded(true);
            setPosts(data);
        }
        fetchPosts();

        return function cleanup() {
            ac.abort();
        }
    });

    return (
        <>
            {isLoaded &&
                <div>
                    {posts.map(post => 
                    <div key={post.id} className='post'>
                        <h1>Post #{post.id}</h1>
                        <p>Title:</p>
                        <p>{post.title}</p>
                        <p>Body:</p>
                        <p>{post.body}</p>
                    </div>)}
                </div>
            }
        </>
    );
}

export default Posts;