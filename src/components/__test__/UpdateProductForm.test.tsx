import * as React from 'react';
import * as renderer from 'react-test-renderer';
import UpdateProductForm from '../UpdateProductForm';

const props = {
    name: "",
    price: "",
    imgUrl: "",
    deleteProduct: () => {},
    handleSubmit: () => {},
    updateValue: ({}) => {},
    cancelEdit: () => {}
};

describe('UpdateProductForm component test', () => {
    it('UpdateProductForm component renders correctly', () => {

        const tree = renderer.create(<UpdateProductForm {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('UpdateProductForm component has instances', async () => {

        const tree = renderer.create(<UpdateProductForm {...props} />);
        const instance = tree.getInstance();
        const render = instance.render();
        expect(render).toBeTruthy();
        
    });

})