import React from 'react';
import ProductsList from '../components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoes } from '../statemanagement/ShoeSlice';

const ProductPage = () => {
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
    return (
        <div className='min-h-[600px] mt-10'>
            {/* {console.log(shoeData)} */}
            <ProductsList data={shoeData} loading={loading} error={error} category={category} title='All Products'style={style} limit={8} />
        </div>
    );
}
 
export default ProductPage;