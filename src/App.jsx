import react from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  ProductTopID,
  ProductBottomID,
  ProductBottomCategory,
  ProductTopCategory,
  ProductCategoryCasual,
  ProductCategoryFormal,
  ProductCategoryGym,
  ProductCategoryParty,
  ProductCategoryOnSale,
  ProductCategoryNewArrivals,
  ProductSearchByWord,
  ProductShop,
  Cart,
  NotFound
} from './pages';
import { Navbar, Footer } from './components';
import { ScrollToTop } from './minicomponents'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className='pt-20'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/tops/:id" element={<ProductTopID />} />
            <Route path="/products/tops" element={<ProductTopCategory />} />

            <Route path="/products/bottoms/:id" element={<ProductBottomID />} />
            <Route path="/products/bottoms" element={<ProductBottomCategory />} />

            <Route path="/products/casual" element={<ProductCategoryCasual />} />
            <Route path="/products/formal" element={<ProductCategoryFormal />} />
            <Route path="/products/gym" element={<ProductCategoryGym />} />
            <Route path="/products/party" element={<ProductCategoryParty />} />
            <Route path="/products/onsale" element={<ProductCategoryOnSale />} />
            <Route path="/products/newarrivals" element={<ProductCategoryNewArrivals />} />
            <Route path="/products/:query" element={<ProductSearchByWord />} />


            <Route path="/products/shop" element={<ProductShop />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />



          </Routes>
        </main>

      </Router>

      <Footer />
    </>
  )
}


export default App
