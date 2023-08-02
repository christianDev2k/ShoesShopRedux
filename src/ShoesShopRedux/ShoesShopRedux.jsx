import React from 'react';
import ProductsList from './ProductsList';
import DataProducts from './data.json';
import './style.scss';
import { ShoppingOutlined } from '@ant-design/icons';
import ProductDetailModal from './ProductDetailModal';
import { Badge } from 'antd';
import CartModal from './CartModal';
import { useDispatch, useSelector } from 'react-redux';
import { shoesShopRedux } from './actions';
import { HANDLE_ISOPENCARTMODAL } from './actionsType';
import CheckoutConfirm from './CheckoutConfirm';

const ShoesShopRedux = () => {
    const { productDetail } = useSelector(state => state.shoesShopReducer);
    const { cartBadgeQty } = useSelector(state => state.shoesShopReducer);
    const dispatch = useDispatch();

    const handleOpenCart = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, true));
    };

    return (
        <div className='max-w-screen-xl mx-auto p-5'>
            <div className='grid grid-cols-4 items-center'>
                <div></div>
                <h1 className='col-span-2 text-center font-bold text-5xl'>Shoes Shop Redux</h1>
                <div className='ml-auto cursor-pointer' onClick={handleOpenCart}>
                    <Badge count={cartBadgeQty} offset={[0, 15]} size='small'>
                        <ShoppingOutlined className='text-3xl' />
                    </Badge>
                </div>
            </div>
            <ProductsList DataProducts={DataProducts} />

            {/* Product Detail Modal  */}
            <ProductDetailModal product={productDetail} />

            {/* Cart modal */}
            <CartModal />

            <CheckoutConfirm />
        </div>
    );
};

export default ShoesShopRedux;
