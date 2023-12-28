import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'; //importar estilos 
import TaskForm from '../pure/forms/taskForm';
 
//cuando se haga un llamado a este componente (función) se ejecuta la función y devuelve algo
const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', false, LEVELS.BLOCKING);

    //estado del componente 
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Tasks state has been modifed');
        setLoading(false);
        return () => {
            console.log('Tasks component is going to unmount...');
        };
    }, [tasks]);//se ejecuta cada vez que escucha un cambio en tareas (tasks)


    const changeCompleted = (id) => {//cambiar estado tarea
        console.log('To Do: cambiar el estado de tarea');
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*TODO Aplicar un for/map para renderizar una lista de taraes */}
                                {
                                    tasks.map((task, index) => {
                                        return (
                                            <TaskComponent key={index} task={task}></TaskComponent>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>

        </div>
    );
};



export default TaskListComponent;
