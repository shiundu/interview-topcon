import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AddProduct from '../AddProduct';
import { initialState } from '.././../reducers';

const mockStore = configureMockStore();
const store = mockStore({...initialState});

describe('AddProduct container test', () => {
    it('AddProduct contaiiner renders correctly', () => {
        const tree = renderer.create(
        <Provider store={store}>
              <AddProduct />
            </Provider>)
          .toJSON();

        expect(tree).toMatchSnapshot();
    });
})
