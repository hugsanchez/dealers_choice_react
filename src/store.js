import {createStore} from 'redux';

const initialState = {
    list:[],
    produce:[],
    meat: [],
    dairy:[]
}
const ADD_ITEM = 'ADD_ITEM';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_ITEM = 'DELETE_ITEM';

const store = createStore((state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return {...state, list:[...state.list, action]};

        case LOAD_PRODUCTS:
            return state = {...state, produce:action.produce, meat: action.meat, dairy: action.dairy };

        case DELETE_ITEM:
            const _list = state.list.filter((product,idx) => idx !== action.itemIdx);
            return {...state, list:_list};

        default:
            return state;
    }
});

const loadProducts = (produce,meat,dairy) =>{
    return {
        type: LOAD_PRODUCTS,
        produce,
        meat,
        dairy
    };
};

const addItem = (name) => {
    return{
        type: ADD_ITEM,
        name

    }
}

const deleteItem = (itemIdx) => {
    return{
        type: DELETE_ITEM,
        itemIdx
    }
}

export default store;
export {loadProducts, addItem, deleteItem};