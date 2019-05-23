import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from '../Login';
import { initialState } from '.././../reducers';

const mockStore = configureMockStore();
const store = mockStore({...initialState});

describe('Login container test', () => {
    it('Login container renders correctly', () => {
        const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });
})