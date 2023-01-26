import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Error from './components/Error'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path='/blog/:id' element={<Blog></Blog>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  )
}

export default App
