import {createStore} from 'redux';

const initialState = {
    list:[],
    produce:[],
    meat: [],
    dairy:[]
}
const ADD_ITEM = 'ADD_ITEM';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

const store = createStore((state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            console.log(action)
            return {...state, list:[...state.list, action]};

        case LOAD_PRODUCTS:
            return state = {...state, produce:action.produce, meat: action.meat, dairy: action.dairy }

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

export default store;
export {loadProducts, addItem};