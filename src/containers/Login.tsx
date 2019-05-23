import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { State } from '../reducers';
import { getUser } from '../selectors';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state: State) => ({
    user: getUser(state)
  })
const mapDispatchToProps = {
    loginUser: loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)