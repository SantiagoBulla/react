import { connect } from 'react-redux'

// Actions
import { httpRequest } from '../../store/actions/asyncActions'

import LoginForm from '../pure/LoginForm';

const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            }

            const url = 'https://reqres.in/api/login';

            dispatch(httpRequest('post', url, data));
        }
    }
}

//we connect State & dispatch to LoginForm's props
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;