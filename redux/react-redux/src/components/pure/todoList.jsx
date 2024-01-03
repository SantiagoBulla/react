import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';


const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map((todo, index) =>
                (
                    <Todo
                        key={index}
                        {...todo} //se le pasa todos los props quw requiere el todo { id, text, completed }
                        onClickMethod={
                            () => onTodoClick(todo.id) //se pasa la funcion como prop y su id
                        }
                    />
                )
                )}
            </ul>
        </div>
    );
};


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(//se especifija que valores va a contener el array
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
