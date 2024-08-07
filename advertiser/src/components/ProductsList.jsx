import React from 'react';
// import components
import Product from './Product';
import { LoadingCard } from '../utils/toastify';
const ProductList = ({ data, loading, title, category, style, limit }) => {

  return (
    <section className='mb-20 mt-10'>
      <div className='container mx-auto'>
        <div
          className='text-center text-[1.75rem] font-bold text-black mb-2' style={style}
        >{title} {category ? `for ${category}` : ""}</div>
        <div className='text-center text-gray-700 mb-7 mt-3 mx-auto text-md font-[400] max-w-2xl italic' style={style}>
          Fluffy sneakers. Cushy slippers. Ridiculously fluffy pants. Home or away, we’ve got what he needs to chill the most.</div>
        {loading ? <LoadingCard /> :
          <div className={data?.length >= 4 ? `grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8` : data?.length === 3 ? `grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8` : data?.length === 2 ? `grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8` : data?.length === 1 ? `grid md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8` : ""}>
            {data?.slice()?.reverse()?.map((Products, index) => {
              return (
                <div className='flex items-center justify-center' key={index}>
                  <Product Products={Products} />
                </div>
              );
            }).slice(0, limit)}
          </div>
        }
 
      </div>
    </section >
  );
};
 
export default ProductList;