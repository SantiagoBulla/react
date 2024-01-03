import { connect } from 'react-redux'

//actions
import { toggleTodo } from '../../store/actions/actions'

import TodoList from '../pure/todoList';

//Filtrar Todo lits
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);

        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: filterTodos(state.todosState, state.filterState) //prop de todolist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

//we connect State & dispatch to TodoList's props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodosContainer;