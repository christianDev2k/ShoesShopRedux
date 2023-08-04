import React from 'react';
import { Button, Drawer, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesShopRedux } from '../store/shoesRedux/actions';
import {
    HANDLE_CARTBADGEQTY,
    HANDLE_ISCHECKOUTCONFIRMMODAL,
    HANDLE_ISOPENCARTMODAL,
} from '../store/shoesRedux/actionsType';
import CartList from './CartList';
import { DropboxOutlined, FileTextOutlined, GiftOutlined, WalletOutlined } from '@ant-design/icons';

const CartModal = () => {
    const { isOpenCartModal } = useSelector(state => state.shoesShopReducer);
    const { cartSubtotal } = useSelector(state => state.shoesShopReducer);

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, false));
    };

    const handleCheckout = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, false));
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISCHECKOUTCONFIRMMODAL, true));
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_CARTBADGEQTY));
    };

    return (
        <Drawer
            title='Cart'
            placement='right'
            onClose={onClose}
            open={isOpenCartModal}
            bodyStyle={{ paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 200 }}
            className='relative cart-drawer'
        >
            <CartList />
            {cartSubtotal > 0 && (
                <div className='absolute bottom-0 w-full z-50 bg-white'>
                    <div className='grid grid-cols-4 border-y border-color-gray-100 text-center text-lg py-5'>
                        <Popover placement='top' content='Add order note' trigger='hover'>
                            <FileTextOutlined className='cursor-pointer' />
                        </Popover>
                        <Popover placement='top' content='Add gift' trigger='hover'>
                            <GiftOutlined className='cursor-pointer' />
                        </Popover>
                        <Popover placement='top' content='Estimate' trigger='hover'>
                            <DropboxOutlined className='cursor-pointer' />
                        </Popover>
                        <Popover placement='top' content='Add coupon' trigger='hover'>
                            <WalletOutlined className='cursor-pointer' />
                        </Popover>
                    </div>
                    <div className='p-5 bg-gray-100'>
                        <div className='flex justify-between mb-5 font-semibold text-lg'>
                            <p>Subtitle</p>
                            <p>${cartSubtotal.toFixed(2)}</p>
                        </div>
                        <Button
                            type='primary'
                            className='w-full py-6 text-base font-semibold bg-blue-500 flex items-center justify-center'
                            onClick={handleCheckout}
                        >
                            Checkout now
                        </Button>
                    </div>
                </div>
            )}
        </Drawer>
    );
};

export default CartModal;
