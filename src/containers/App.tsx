import { connect } from 'react-redux';
import { State } from '../reducers';
import { getUser } from '../selectors';
import { logoutUser } from '../actions';
import AddProduct from './AddProduct';
import Products from './Products';
import Login from './Login';
import withHeader from '../components/bundlerHOC';

const mapStateToProps = (state: State) => ({
    user: getUser(state)
})

const mapDispatchToProps = {
    logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withHeader(Login, AddProduct, Products));