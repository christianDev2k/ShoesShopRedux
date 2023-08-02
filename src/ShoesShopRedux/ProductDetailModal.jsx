import { Button, Modal, InputNumber } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { shoesShopRedux } from './actions';
import { HANDLE_ISOPENCARTMODAL, HANDLE_ISOPENDETAILMODAL } from './actionsType';

const ProductDetailModal = ({ product }) => {
    const { image, name, price, description, quantity } = product;

    const { isOpenDetailModal } = useSelector(state => state.shoesShopReducer);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENDETAILMODAL, false));
    };

    const handleAddToCart = () => {
        dispatch(shoesShopRedux.handleIsOpenModal(HANDLE_ISOPENCARTMODAL, true));
        dispatch(shoesShopRedux.handleAddCart(product));
        dispatch(shoesShopRedux.handleSubtotalCart());
        dispatch(shoesShopRedux.handleCartBadgeQty());
        handleCancel();
    };

    return (
        <Modal open={isOpenDetailModal} onCancel={handleCancel} width={768} footer={null}>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={image} alt='adidas' />
                </div>
                <div className='p-5'>
                    <h3 className='text-2xl font-bold my-2'>{name}</h3>
                    <div className='flex items-center'>
                        <StarFilled className='mx-0.5 text-yellow-300' />
                        <StarFilled className='mx-0.5 text-yellow-300' />
                        <StarFilled className='mx-0.5 text-yellow-300' />
                        <StarFilled className='mx-0.5 text-yellow-300' />
                        <StarFilled className='mx-0.5 text-yellow-300' />
                        <span className='ml-2 text-gray-500 text-sm'>(5)</span>
                    </div>
                    <p className='mt-3 text-2xl font-semibold'>${price.toFixed(2)}</p>
                    <div className='flex justify-between items-center mr-4 mt-4'>
                        <div>
                            <p className='inline-block mr-4 font-semibold'>Quantity</p>
                            <InputNumber min={1} defaultValue={1} />
                        </div>
                        <div>
                            <span className='font-semibold'>In stock:</span> {quantity}
                        </div>
                    </div>
                    <p className='mt-4 text-gray-500'>{description}</p>
                    <Button
                        type='primary'
                        className='w-full py-5 text-base bg-blue-500 flex items-center justify-center mt-4'
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetailModal;
