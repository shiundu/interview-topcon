import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoginForm from '../LoginForm';
import { initialState } from '.././../reducers';

describe('LoginForm component test', () => {
    it('LoginForm component renders correctly', () => {
        let props = {
            loginUser: () => {},
            ...initialState.user
        }

        const tree = renderer.create(<LoginForm {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('LoginForm component has instances', async () => {
        let props = {
                loginUser: () => {},
                ...initialState.user
        }

        const tree = renderer.create(<LoginForm {...props} />);
        const instance = tree.root;
        const form = instance.findByType("form");
        expect(form).toBeTruthy();
        
    });

})