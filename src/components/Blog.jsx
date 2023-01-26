import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                console.log(data);
            })
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div key={post.id} className="flex flex-col space-y-6">
                <h1 className='flex text-3xl font-semibold py-3 w-full justify-center bg-gray-400'>{post.title}</h1>
                <p className='font-mono tracking-tight ml-6'>{post.body}</p>
            </div>
        </>
    )
}

export default Blog