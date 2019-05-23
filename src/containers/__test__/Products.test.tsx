import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Products from '../Products';
import { initialState } from '.././../reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({...initialState});

describe('Products container test', () => {
    
    it('Products container renders correctly', () => {
        const tree = renderer.create(<Provider store={store}><Products /></Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });
})