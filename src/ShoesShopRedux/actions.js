import { HANDLE_ADDTOCART, HANDLE_DELETECART, HANDLE_EDITQTYCART, HANDLE_PRODUCTDETAIL } from './actionsType';

export const shoesShopRedux = {
    handleProductDetail: payload => {
        return {
            type: HANDLE_PRODUCTDETAIL,
            payload,
        };
    },

    handleIsOpenModal: (type, payload) => {
        return {
            type,
            payload,
        };
    },
    handleAddCart: payload => {
        return {
            type: HANDLE_ADDTOCART,
            payload,
        };
    },
    handleDeleteCart: payload => {
        return {
            type: HANDLE_DELETECART,
            payload,
        };
    },
    handleEditQtyCart: payload => {
        return {
            type: HANDLE_EDITQTYCART,
            payload,
        };
    },
};
