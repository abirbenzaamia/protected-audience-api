import React from 'react';

// import components
import Banner from '../components/Banner';
import ProductsList from '../components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoes } from '../statemanagement/ShoeSlice';

const Home = () => {
  const dispatch = useDispatch();
    const { shoeData, loading, error } = useSelector((state) => state.shoeDetails);
    const { page, limit, sort, brand, category, price } = useSelector((state) => state.filterShoes);
    React.useEffect(() => {
        dispatch(getAllShoes({ page, limit, sort, brand, category, price }));
    }, [ dispatch,page, limit, sort, brand, category, price]);
    
    const style = {
        textAlign: 'left',
        marginLeft: '10px',
    };
  // React.useEffect(() => {
  //   dispatch(getAllShoe({ page, limit, sort, brand, category, price }));
  // }, [dispatch, page, limit, sort, brand, category, price]);
  
  return (
    <div className='min-h-[1400px]'>
      <Banner />
      <div className=' border-t border-gray-200 min-h-[600px] mt-10'>
            {/* {console.log(shoeData)} */}
            <ProductsList data={shoeData} loading={loading} error={error} category={category} title='See our products'style={style} limit={8} />
            <div className='text-center text-gray-700 mb-7 mt-3 mx-auto text-md font-[400] max-w-2xl italic'>
            <button
              className='bg-[#3E78FE] hover:bg-[#293383] transition px-4 py-3 lg:max-w-[162px] rounded-lg text-white text-lg hidden sm:inline-block' >
              See All Products
            </button>
            </div>
        </div>
    </div>
  );
};

export default Home;