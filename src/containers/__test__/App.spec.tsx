import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../App';
import { initialState } from '.././../reducers';

const mockStore = configureMockStore();
const store = mockStore({...initialState});

describe('App test', () => {
    it('App renders correctly', () => {
        const tree = renderer.create(
        <Provider store={store}>
              <App />
            </Provider>)
          .toJSON();

        expect(tree).toMatchSnapshot();
    });
})
