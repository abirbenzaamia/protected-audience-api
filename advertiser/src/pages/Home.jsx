import React from 'react';

// import components
import Banner from '../components/Banner';
const Home = () => {
 
  // React.useEffect(() => {
  //   dispatch(getAllShoe({ page, limit, sort, brand, category, price }));
  // }, [dispatch, page, limit, sort, brand, category, price]);
  return (
    <div className='min-h-[1400px]'>
      <Banner />
      {/* <Search brandValue={brand} categoryValue={category} priceValue={price} pageValue={page} loading={loading} />
      <ProductList data={shoeData} error={error} loading={loading} title='Our Products' limit={4} /> */}
      {/* <TopProduct /> */}
    </div>
  );
};

export default Home;