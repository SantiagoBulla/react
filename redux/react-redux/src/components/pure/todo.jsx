import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ onClickMethod, completed, text, id }) => {
    return (
        <li
            onClick={onClickMethod}
            style={
                {
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? 'green' : 'none',
                    // color: completed ? 'green' : 'grey'
                }
            }
        >
            {id} - {text}
        </li>
    );
};


Todo.propTypes = {
    onClickMethod: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};


export default Todo;

