import React from 'react';
import ProductsList from '../components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoes } from '../statemanagement/ShoeSlice';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { shoeData, loading, error } = useSelector((state) => state.shoeDetails);
    const { id, brand, category, price, description, image_link } = useSelector((state) => state.filterShoes);
    React.useEffect(() => {
        dispatch(getAllShoes({ id, brand, category, price, description, image_link }));
    }, [ dispatch, id, brand, category, price, description, image_link]);
    
    const style = {
        textAlign: 'left',
        marginLeft: '10px',
    };
    return (
        <div className='min-h-[600px] mt-10'>
            {/* {console.log(shoeData)} */}
            <ProductsList data={shoeData} loading={loading} error={error} category={category} title='All Products'style={style} limit={20} />
        </div>
    );
}
 
export default ProductPage;