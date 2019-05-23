import axios from 'axios';
import { Dispatch } from 'redux';
import { Product } from '../models';
import { 
    ActionTypes, 
    AddProduct, 
    InitialProductListAction, 
    DeleteAction, 
    UpdateProductAction 
} from './types';

export function initialProductList() {
    return async (dispatch: Dispatch) => {
        try {
          const response = await axios.get('db.json');
          dispatch({
            type: ActionTypes.INITIAL_PRODUCT_LIST,
            payload: {
                products: response.data
            }
          });
        } catch (err) {
          dispatch({
            type: ActionTypes.INITIAL_PRODUCT_LIST,
            payload: {
                products: []
            }
            })
        };
    }
}

export function addProduct(product: Product): AddProduct {
    return {
      type: ActionTypes.ADD_PRODUCT,
      payload: {
        product: {
          ...product
        }
      }
    }
}

export function updateProduct(product: Product): UpdateProductAction {
    return {
        type: ActionTypes.UPDATE_PRODUCT,
        payload: {
          product
        }
      }
}

export function deleteProduct(productId: number): DeleteAction {
    return { type: ActionTypes.DELETE_PRODUCT, payload: { productId } }
}

export type Action = AddProduct | InitialProductListAction | DeleteAction | UpdateProductAction