import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Header';

// import pages
import Home from './pages/Home';
import Products from './pages/AllProducts';
import CategoryPage from './pages/PerCategoryPage'

const App = () => {
  
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/product/:id' element={<ProductDetails />} /> */}
        <Route path='/products' element={<Products />} />
        <Route path='/sneakers' element={<CategoryPage />} />
        <Route path='/boots' element={<CategoryPage />} />
        <Route path='/sandals' element={<CategoryPage />} />
        <Route path='/loafers' element={<CategoryPage />} />
        <Route path='/heels' element={<CategoryPage />} />
        {/* <Route path='/wishlist' element={<Wishlist />} /> */}
        {/* <Route path='/user/:userId/verify/:verifyId' element={<UserVerification />} /> */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;