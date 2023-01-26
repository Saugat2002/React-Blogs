import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                console.log(data);
            })
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <h1 className='flex text-3xl font-semibold py-3 w-full justify-center bg-gray-400'>Blog List</h1>
            <div className='flex flex-col space-y-3 py-3'>
                {blogs.map((blog) => {
                    return (
                        <li key={blog.id} className='text-xl px-5 list-[number] font-mono'>
                            <Link to={`/blog/${blog.id}`} className='hover:underline hover:text-blue-600'>
                                {blog.title}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </>
    )
}

export default Blogs