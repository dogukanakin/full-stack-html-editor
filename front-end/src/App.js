import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar'
import BlogHome from './pages/BlogHome'

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <div className='container'>
        <h1 className='display-4 text-center'>Django REST API</h1>
        <p className='lead text-center'>Blog API</p>
        <hr />
        <Routes>
          <Route path='/blog' element={<BlogHome />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
