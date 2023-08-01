import React from 'react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesShopRedux } from './actions';
import { HANDLE_ISOPENCARTMODAL } from './actionsType';
import CartList from './CartList';
import { DropboxOutlined, FileTextOutlined, GiftOutlined, WalletOutlined } from '@ant-design/icons';

const CartModal = () => {
    const { isOpenCartModal } = useSelector(state => state.shoesShopReducer);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, false));
    };

    return (
        <Drawer
            title='Cart'
            placement='right'
            onClose={onClose}
            open={isOpenCartModal}
            bodyStyle={{ padding: 0 }}
            className='relative'
        >
            <CartList />
            <div className=' absolute bottom-0 w-full z-50'>
                <div className='grid grid-cols-4 border-y border-color-gray-100 text-center text-lg py-5'>
                    <FileTextOutlined className='cursor-pointer'/>
                    <GiftOutlined className='cursor-pointer'/>
                    <DropboxOutlined className='cursor-pointer'/>
                    <WalletOutlined className='cursor-pointer'/>
                </div>
                <div className='p-5 bg-gray-100'>
                    <div className="flex justify-between mb-5 font-semibold text-lg">
                        <p>Subtitle</p>
                        <p>$500.00</p>
                    </div>
                    <Button
                        type='primary'
                        className='w-full py-6 text-base font-semibold bg-blue-500 flex items-center justify-center'
                    >
                        Checkout now
                    </Button>
                </div>
            </div>
        </Drawer>
    );
};

export default CartModal;
