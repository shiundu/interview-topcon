import * as React from 'react';
import { Auth, User } from '../models';

export interface Props {
    loginUser: (user: Auth) => void,
    user: User
}

interface State {
    user: Auth
}

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }
    handleTextChange(e: any) {
        console.warn('e', e.target)
        let user = this.state.user;
        user[e.target.name] = e.target.value;
    }

    handleLogin(e: any) {
        e.preventDefault();
        this.props.loginUser(this.state.user)
    }

    render() {
        let { user } = this.props;
        return (
            <div className="col">
                <form className="form-signin" >
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    {user && user.error &&
                    <div className="alert alert-danger" role="alert">
                        Invalid login
                    </div>
                    }
                    <input
                        type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="default: test@test.co" 
                        name="username"
                        onChange={(e) => this.handleTextChange(e)}
                    />
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password: password" 
                        name="password"
                        onChange={(e) => this.handleTextChange(e)}
                    />
                    <button 
                        className="btn btn-lg btn-primary btn-block"
                        onClick={(e) => this.handleLogin(e)}
                    >
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-</p>
                </form>
            </div>
        )
    }
}
