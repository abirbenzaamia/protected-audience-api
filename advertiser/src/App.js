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
        <Route path='/sneakers' element={<CategoryPage cat={"sneakers"} />} />
        <Route path='/boots' element={<CategoryPage cat={"boots"}  />} />
        <Route path='/sandals' element={<CategoryPage cat={"sandals"}  />} />
        <Route path='/loafers' element={<CategoryPage cat={"loafers"}  />} />
        <Route path='/heels' element={<CategoryPage cat={"heels"}  />} />
        {/* <Route path='/wishlist' element={<Wishlist />} /> */}
        {/* <Route path='/user/:userId/verify/:verifyId' element={<UserVerification />} /> */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;