import * as React from 'react';
import { User } from '../models';

interface Props {
    logoutUser: () => void,
    user: User
}

export default (Login: any, AddProduct: any, Products: any) => {
    return class extends React.Component<Props> {

        render() {
            let { user } = this.props
            console.warn('user', user)
            if (user && !user.id) {
                return <Login />
            }
            return (
                <div>
                    <header>
                        <nav className="nav navbar fixed-top navbar-light bg-light bg-faded">
                            <a className="navbar-brand" href="#">TopCon</a>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{user.firstName} {user.lastName}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={this.props.logoutUser}>Logout</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="container">
                        <AddProduct />
                        <Products />
                    </div>
                </div>
            )
        }
    }
}