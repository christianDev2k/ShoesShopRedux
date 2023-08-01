import { combineReducers } from 'redux';
import { shoesShopReducer } from './shoesRedux/reducer.js';

const rootReducer = combineReducers({
    shoesShopReducer,
});

export default rootReducer;
