export interface Product {
    id: number,
    name: string,
    price: string,
    imgUrl: string
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    authenticationToken: string,
    error: boolean
}

export interface Auth {
    username: string,
    password: string
}