const initState = {
    productDetail: {
        id: 12,
        name: 'Nike Air Max 270 React',
        alias: 'nike-air-max-270-react',
        price: 750,
        description:
            "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: 'Paul George is the rare high-percentage shooter',
        quantity: 445,
        image: 'http://svcy3.myclass.vn/images/nike-air-max-270-react.png',
    },
    isOpenDetailModal: false,
    isOpenCartModal: false,
    isCheckoutConfirmModal: false,
    cartList: [],
    cartSubtotal: 0,
    cartBadgeQty: 0,
};

export const shoesShopReducer = (state = initState, { type, payload }) => {
    let index = -1;
    switch (type) {
        case 'HANDLE_PRODUCTDETAIL':
            return { ...state, productDetail: payload };
        case 'HANDLE_ISOPENDETAILMODAL':
            return { ...state, isOpenDetailModal: payload };
        case 'HANDLE_ISOPENCARTMODAL':
            return { ...state, isOpenCartModal: payload };
        case 'HANDLE_ISCHECKOUTCONFIRMMODAL':
            return { ...state, cartList: [], isCheckoutConfirmModal: payload };
        case 'HANDLE_ADDTOCART':
            index = state.cartList.findIndex(p => p.id === payload.id);
            if (index === -1) {
                return { ...state, cartList: [...state.cartList, { ...payload, cartQty: 1 }] };
            } else {
                state.cartList[index].cartQty += 1;
            }
            return { ...state };
        case 'HANDLE_DELETECART':
            const newCart = state.cartList.filter(p => p.id !== payload);
            return { ...state, cartList: newCart };
        case 'HANDLE_EDITQTYCART':
            const { id, value } = payload;
            index = state.cartList.findIndex(p => p.id === id);
            state.cartList[index].cartQty = value;
            return { ...state };
        case 'HANDLE_SUBTOTALCART':
            const newSubtitle = state.cartList.reduce((acc, { price, cartQty }) => {
                acc += price * cartQty;
                return acc;
            }, 0);
            return { ...state, cartSubtotal: newSubtitle };
        case 'HANDLE_CARTBADGEQTY':
            console.log(1);
            const quantity = state.cartList.reduce((acc, { cartQty }) => {
                acc += cartQty;
                return acc;
            }, 0);
            return { ...state, cartBadgeQty: quantity };
        default:
            return state;
    }
};
