import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { shoesShopRedux } from './actions';

const CartList = () => {
    const { cartList } = useSelector(state => state.shoesShopReducer);
    const dispatch = useDispatch();

    const handleDeteteCart = id => {
        dispatch(shoesShopRedux.handleDeleteCart(id));
        dispatch(shoesShopRedux.handleSubtotalCart());
    };

    const onChange = (value, id) => {
        dispatch(shoesShopRedux.handleEditQtyCart({ value, id }));
        dispatch(shoesShopRedux.handleSubtotalCart());
    };

    return (
        <div>
            <List
                dataSource={cartList}
                className='px-5'
                renderItem={product => {
                    const { id, name, image, price, cartQty } = product;
                    return (
                        <List.Item key={id}>
                            <div className='grid grid-cols-12 items-center'>
                                <img src={image} alt='' className='max-w-full col-span-3' />
                                <div className='col-span-9 flex p-2'>
                                    <div className='grow pl-3'>
                                        <h4 className='font-bold'>{name}</h4>
                                        <p className='text-gray-600 text-base mt-2'>${price.toFixed(2)}</p>
                                        <InputNumber
                                            min={1}
                                            value={cartQty}
                                            className='mt-2 w-16'
                                            onChange={value => onChange(value, id)}
                                        />
                                    </div>
                                    <div className='max-w-content text-gray-600'>
                                        <button
                                            className='block hover:text-gray-800'
                                            onClick={() => handleDeteteCart(id)}
                                        >
                                            <DeleteOutlined />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default CartList;
