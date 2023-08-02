import React from 'react';
import { Card, Button, Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { shoesShopRedux } from './actions';
import { HANDLE_ISOPENCARTMODAL, HANDLE_ISOPENDETAILMODAL } from './actionsType';

const ProductItem = ({ product }) => {
    const { name, image, price, shortDescription } = product;

    const dispatch = useDispatch();

    const handleDispatch = () => {
        dispatch(shoesShopRedux.handleProductDetail(product));
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENDETAILMODAL, true));
    };

    const handleCart = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, true));
        dispatch(shoesShopRedux.handleAddCart(product));
        dispatch(shoesShopRedux.handleSubtotalCart());
        dispatch(shoesShopRedux.handleCartBadgeQty());
    };

    return (
        <div>
            <Card className='shadow-sm hover:shadow' cover={<img alt='example' src={image} />}>
                <h3 className='font-bold text-lg cursor-pointer' onClick={handleDispatch}>
                    {name}
                </h3>
                <p className='text-lg font-semibold mt-4 mb-0'>${price.toFixed(2)}</p>
                <div className='my-2'>
                    <Rate className='text-sm' allowHalf={true} />
                </div>
                <p>{shortDescription}</p>
                <Button
                    type='primary'
                    className='w-full py-5 text-base bg-blue-500 flex items-center justify-center mt-4'
                    onClick={handleCart}
                >
                    Add to cart
                </Button>
            </Card>
        </div>
    );
};

export default ProductItem;
