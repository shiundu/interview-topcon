import * as React from 'react';
import _ from 'lodash';
import { Product } from '../models';
import UpdatProductForm from './UpdateProductForm';

interface Props {
  products: Product[],
  initialProductList: () => void,
  deleteProduct: (id: number) => void,
  onTodoClicked: (todoId: number) => void,
  handleSubmit: (Product: Product) => void
}

interface State { 
    productId: number,
    edit: boolean,
    product: Product,
    sort: boolean,
    sortProductBy: string
}

export default class ProductList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            productId: 0,
            edit: false,
            sort: false,
            product: {
                id: 0,
                name: '',
                price: '',
                imgUrl: ''
            }
        }
        this.props.initialProductList();
    }

    updateValue(e: any) {
        let product = this.state.product;
        let { name, value } = e.target;

        product.id = this.state.productId;
        product[name] = value;

        this.setState({ product })
    }

    handleSubmit() {
        this.props.handleSubmit(this.state.product);
        this.cancelEdit();
    }

    cancelEdit = () => {
        this.setState({
            productId: 0,
            edit: false,
            product: {
                id: 0,
                name: '',
                price: '',
                imgUrl: ''
            }
        })
    }

    activateEdit = (id: number) => {
        this.setState({
            ...this.state,
            edit: !this.state.edit,
            productId: id
        })
    }
    
    renderList = (products: Array) => {
        const { deleteProduct } = this.props;
        const { edit, productId, product } = this.state;
        const { name, price, imgUrl } = product;

        return (
            <ul className='card-deck'>
                {products.map(product => (
                    <li className="card" style={styles.product} key={product.id}>
                        <img className="card-img-top" src={product.imgUrl} alt="Card image cap" />
                        <div className="card-body" style={{padding: '15px'}} >
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                        </div>
                        
                        {edit && productId === product.id 
                            && <UpdatProductForm
                            name={name} 
                            price={price} 
                            imgUrl={imgUrl} 
                            updateValue={(e) => this.updateValue(e)} 
                            handleSubmit={() => this.handleSubmit()} 
                            cancelEdit={() => this.cancelEdit()}
                        /> }
                        {!edit && <div className="card-body text-center" style={{padding: '15px'}}>
                                    <div className="btn-group" role="group">
                                        <button 
                                            className="btn btn-primary btn-sm"
                                            onClick={() => this.activateEdit(product.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteProduct(Number(product.id))} 
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                        }
                    </li>
                ))}
            </ul>
        )
    }

    sortProductList () {
        const { products } = this.props;

        let sortedProducts = _.sortBy(products, [this.state.sortProductBy]);

        if (this.state.asc) {
            return this.renderList(sortedProducts);
        }
        
        return this.renderList(sortedProducts.reverse());
    }

    updateSort = (n)  => this.setState({
        sortProductBy: n, 
        sort: true,
        asc: !this.state.asc
    })

    render() {
        const { products, deleteProduct } = this.props;
        const { edit, productId, product, sort, asc, sortProductBy } = this.state;
        const { name, price, imgUrl } = product;

        return (
            <div>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown" style={{marginLeft: '35px'}}>
                    <button type="button" className="btn btn-secondary">Sort by:</button>
                    <div className={asc && sortProductBy === 'name' ? 'btn-group dropup' : 'btn-group dropdown'} role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" onClick={() => this.updateSort('name') } >
                            Product Name<i className="fa fa-angle-up"/>
                        </button>
                    </div>
                    <div className={asc && sortProductBy === 'price' ? 'btn-group dropup' : 'btn-group dropdown'} role="group">
                        <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" onClick={() =>  this.updateSort('price') }>
                            Price
                        </button>

                        <button id="btnGroupDrop2" type="button" className="btn btn-secondary" onClick={() => this.setState({sort: false}) }>
                            Clear
                        </button>
                    </div>
                </div>
                {sort ? this.sortProductList() : this.renderList(products) }
        </div>
        )
    }
}

const styles = { 
    product: {
        maxWidth: '200px' , 
        minWidth: '200px', 
        margin: '10px'
    }
}