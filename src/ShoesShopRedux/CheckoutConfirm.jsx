import React from 'react';
import { Button, Modal, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesShopRedux } from '../store/shoesRedux/actions';
import { HANDLE_ISCHECKOUTCONFIRMMODAL } from '../store/shoesRedux/actionsType';

const CheckoutConfirm = () => {
    const { cartSubtotal } = useSelector(state => state.shoesShopReducer);
    const { isCheckoutConfirmModal } = useSelector(state => state.shoesShopReducer);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISCHECKOUTCONFIRMMODAL, false));
        dispatch(shoesShopRedux.handleSubtotalCart());
    };

    return (
        <Modal centered open={isCheckoutConfirmModal} onCancel={handleClose} footer={null}>
            <div className='text-center text-xl p-6'>
                <p className='mb-1'>Your purchase is ${cartSubtotal.toFixed(2)}</p>
                <p className='mb-4'>Scan QR code to checkout now!</p>
                <img src='./checkoutImg.jpg' alt='' className='w-1/2 mx-auto' />
                <p className='mt-4'>Thank you! Your items is ready for pickup.</p>
                <div className='flex justify-around mt-4'>
                    <Popover placement='top' content='That right! Amazing good job.' trigger='hover'>
                        <Button type='primary' size={'large'} className='bg-blue-500' onClick={handleClose}>
                            OK
                        </Button>
                    </Popover>
                    <Popover
                        placement='top'
                        content='You must pay for your order :))'
                        className='bg-transparent'
                        trigger='hover'
                    >
                        <Button type='primary' size={'large'} className='bg-blue-500' disabled>
                            Unpaid
                        </Button>
                    </Popover>
                </div>
            </div>
        </Modal>
    );
};

export default CheckoutConfirm;
