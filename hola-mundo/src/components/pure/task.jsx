import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => { //recibe un prop llamado task (contenido de una tarea)

    useEffect(() => {
        console.log('Task created succesfully');
        return () => {
            console.log(`Tasks: ${task.name} is going to unmount...`);
        };
    }, [task]);


    return (
        <div>
            <h2> Task name: {task.name}</h2>
            <h3> Task description: {task.description}</h3>
            <h4> Task level: {task.level} </h4>
            <h5> This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),//el prop task sera de tipo clase Task
};


export default TaskComponent;
