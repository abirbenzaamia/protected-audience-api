import React from 'react';
import ProductList from '../components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';

import { getShoeByCat } from '../statemanagement/ShoeSlice';

const ProductPage = ({cat}) =>{

    // const dispatch = useDispatch();
    // //const cat  = useParams();
    // const { shoeCat, loading, error } = useSelector((state) => state.shoeDetails);
    // console.log(shoeCat)
    // React.useEffect(() => {
    //     dispatch(GetShoeByCategory(cat));
    //   }, [dispatch, cat]);
    const dispatch = useDispatch();
    const { shoeCat, loading, error } = useSelector((state) => state.shoeDetails);
    const { id, brand, category, price, description, image_link } = useSelector((state) => state.filterShoes);
    React.useEffect(() => {
        dispatch(getShoeByCat(cat));
    }, [ dispatch,cat, id, brand, category, price, description, image_link]);
    
    const style = {
        textAlign: 'left',
        marginLeft: '10px',
    };
    return (
        <div className='min-h-[600px] mt-10'>
            {/* <Search brandValue={brand} categoryValue={category} priceValue={price} pageValue={page} loading={loading} /> */}
            <ProductList data={shoeCat} loading={loading} error={error} category={cat} title='All Products'style={style} limit={4} />
        </div>
    );
}

export default ProductPage;