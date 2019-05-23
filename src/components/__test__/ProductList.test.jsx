import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ProductList from '../ProductList';

const props = {
    initialProductList: () => {},
    products: []
}

describe('ProductList component test', () => {
    it('ProductList component renders correctly', () => {
        const tree = renderer.create(<ProductList {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('ProductList component has instances', async () => {
        const tree = renderer.create(<ProductList {...props} />);
        const instance = tree.getInstance();
        const renderList = instance.renderList([]);
        expect(renderList).toBeTruthy();
        
    });

})