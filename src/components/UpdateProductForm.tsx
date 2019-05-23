import * as React from 'react';
import { Product } from '../models';

interface Props {
    name: string,
    price: string,
    imgUrl: string,
    deleteProduct: (id: number) => void,
    handleSubmit: () => void,
    updateValue: (target: any) => void,
    cancelEdit: () => void
}

interface State {
    product: Product
}

export default class UpdatProductForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
        const { name, price, imgUrl, updateValue, handleSubmit, cancelEdit } = this.props;
        return ( 
            <div>
                <input
                    type="text" 
                    name="name" 
                    value={name} 
                    placeholder="Product name" 
                    onChange={e => updateValue(e)}
                />
                <input
                    type="string" 
                    name="price" 
                    value={price} 
                    placeholder="Price" 
                    onChange={e => updateValue(e)}
                />
                <input 
                    type="url" 
                    name="imgUrl" 
                    value={imgUrl} 
                    placeholder="Product image url" 
                    onChange={e => updateValue(e)} 
                />
                <div className="card-body text-center" style={{padding: '15px'}}>
                    <div className="btn-group" role="group">
                        <button
                            onClick={() => handleSubmit()}
                            className="btn btn-warning btn-sm"
                        >
                            Update
                        </button>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => cancelEdit()}
                        >
                            Cancel
                        </button>
                        
                    </div>
                </div>
            </div>
        )
  }
}