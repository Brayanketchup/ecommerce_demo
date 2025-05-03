import { react } from 'react'

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
  ProductShop,
  Cart
} from './pages';
import { Navbar, Footer } from './components';
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className='py-20'>

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
          <Route path="/products/shop" element={<ProductShop />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
        </main>

      </Router>

      <Footer />
      {/* </CartProvider> */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  )
}


export default App
