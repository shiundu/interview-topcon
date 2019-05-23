import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AddProductForm from '../AddProductForm';

const props = {
};

describe('AddProductForm component test', () => {
    it('AddProductForm component renders correctly', () => {

        const tree = renderer.create(<AddProductForm />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('AddProductForm component has instances', async () => {

        const tree = renderer.create(<AddProductForm />);
        const instance = tree.root;
        const form = instance.findByType("form");
        expect(form).toBeTruthy();
        
    });

})