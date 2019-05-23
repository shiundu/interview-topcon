import * as React from 'react';
import { Product } from '../models';

interface Props {
  handleSubmit: (product: Product) => void
}
interface State {
  product: Product
}

const initialState = {
    product: {
        id: 0,
        name: '',
        price: '',
        imgUrl: ''
    }
}

export default class AddProduct extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState;
    this.changeValue = this.changeValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeValue(target: any) {
    let product = this.state.product;
    let { name, value } = target;

    product[name] = value;
    this.setState({ product })
  }

  resetForm = () => this.setState({
        product: {
            id: 0,
            name: '',
            price: '',
            imgUrl: ''
        }
    });

  handleSubmit(event: any) {
    let { name, price } = this.state.product;
    event.preventDefault();
    if (name.length > 0 &&  price.length > 0 ) {
        this.props.handleSubmit(this.state.product);
        this.resetForm();
    }
  }

  render() {
    const { name, price, imgUrl } = this.state.product;
    const { changeValue, handleSubmit } = this;

    return (
      <form id="productForm" className="form-inline" onSubmit={(event) => handleSubmit(event)}>
        <div className="row">
            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="text" 
                    name="name" 
                    value={name} 
                    placeholder="Product name" 
                    onChange={e => changeValue(e.target)} 
                    className="form-control"
                />
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="string" 
                    name="price" 
                    value={price} 
                    placeholder="Price" 
                    onChange={e => changeValue(e.target)} 
                    className="form-control"
                />
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <input 
                    type="url" 
                    name="imgUrl" 
                    value={imgUrl} 
                    placeholder="Product image url" 
                    onChange={e => changeValue(e.target)}
                    className="form-control"
                />
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <button className="btn btn-primary form-control" type="submit">Add product</button>
            </div>
        </div>
      </form>
    )
  }
}