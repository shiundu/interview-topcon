import { Product, User } from '../models';

export enum ActionTypes {
    INITIAL_PRODUCT_LIST= 'INITIAL_PRODUCT_LIST',
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER'
};

export interface LoginUserAction { type: ActionTypes.LOGIN_USER, payload: { user: User } }
export interface LogoutUserAction { type: ActionTypes.LOGOUT_USER }

export interface AddProduct { type: ActionTypes.ADD_PRODUCT, payload: { product: Product } }
export interface InitialProductListAction { type: ActionTypes.INITIAL_PRODUCT_LIST, payload: { products: any } }
export interface DeleteAction { type: ActionTypes.DELETE_PRODUCT, payload: { productId: number } }
export interface UpdateProductAction { type: ActionTypes.UPDATE_PRODUCT, payload: { product: Product } }