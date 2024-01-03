import { connect } from 'react-redux'

//actions
import { addTodo } from '../../store/actions/actions'

import TodoForm from '../pure/TodoForm';


const mapStateToProps = (state) => {
    //Not necessary
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

//we connect State & dispatch to TodoList's props
const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;