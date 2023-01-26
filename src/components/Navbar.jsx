import { Link } from "react-router-dom"

const Navbar = () => {
    const navbarHeight = 14;
    return (
        <>
            <ul className="flex bg-slate-300 items-center justify-center h-16 [&>*]:h-14 [&>*]:p-3 hover:[&>*]:bg-slate-500">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/blogs'><li>Blogs</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </>
    )
}

export default Navbar