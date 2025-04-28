import { react } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductTops } from './pages';
import { Navbar, Footer } from './components';

function App() {

  return (
    <>
      <Navbar />
      <main className='pt-24'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/products" element={<Products />} /> */}

            <Route path="/products/tops" element={<ProductTops />} />
            <Route path="/products/tops/:id" element={<ProductTops />} />
            
            {/* <Route path="/products/bottoms" element={<ProductTops />} />
            <Route path="/products/bottoms/:id" element={<ProductTops />} /> */}


            {/* <Route path="/product/buttoms/:id" element={<Product />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path='/project/:id' element={<Project />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}


export default App
