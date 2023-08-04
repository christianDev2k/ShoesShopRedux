import {
    HANDLE_ADDTOCART,
    HANDLE_CARTBADGEQTY,
    HANDLE_DELETECART,
    HANDLE_EDITQTYCART,
    HANDLE_PRODUCTDETAIL,
    HANDLE_SUBTOTALCART,
} from './actionsType';

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
    handleSubtotalCart: payload => {
        return {
            type: HANDLE_SUBTOTALCART,
            payload,
        };
    },
    handleCartBadgeQty: payload => {
        return {
            type: HANDLE_CARTBADGEQTY,
            payload,
        };
    },
};
