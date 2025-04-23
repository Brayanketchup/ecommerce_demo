import { react } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages'; 


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path='/project/:id' element={<Project />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}
  

export default App
