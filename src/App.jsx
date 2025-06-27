import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contacts'
import PostList from './components/PostList'
import Posts from './components/Posts'

function App() {
  

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="posts" element={<Posts />} >
          <Route path="postlist" element={<PostList />} />
        </Route> 
        
      </Routes>
    </Router>
    </>
  )
}

export default App
