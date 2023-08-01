import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ DataProducts }) => {
    return (
        <div className='mt-8 grid grid-cols-4 gap-5'>
            {DataProducts.map(p => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    );
};

export default ProductsList;
