import { Product } from '../models';
import { Action } from '../actions/products';
import { ActionTypes } from '../actions/types';

export interface State {
    products: Product[]
};

// Define our initialState
export const initialState: State = {
    products: []
};

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {

        case ActionTypes.INITIAL_PRODUCT_LIST: {
            const products = action.payload.products.reverse();
    
            return {
                ...state,
                products
            }
        }

        case ActionTypes.ADD_PRODUCT: {
            let product = action.payload.product;
            product.id = state.products.length  + 1;
            product.imgUrl = product.imgUrl.length > 0 ? product.imgUrl : 'https://via.placeholder.com/200'

            return {
                ...state,
                products: [product, ...state.products]
            }
        }

        case ActionTypes.UPDATE_PRODUCT: {
            const prod = action.payload.product
            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === prod.id) {
                        product.name = prod.name.length > 0 ? prod.name : prod.name;
                        product.price = prod.price.length > 0 ? prod.price : product.price;
                        product.imgUrl = prod.imgUrl.length > 0 ? product.imgUrl : 'https://via.placeholder.com/200'
                        return product
                    }
                    return product;
                })
            }
        }

        case ActionTypes.DELETE_PRODUCT: {
            const { productId } = action.payload
            return {
                ...state,
                products: state.products.filter(product => product.id !== productId)
            }
        }

        default:
            return state
    }
}