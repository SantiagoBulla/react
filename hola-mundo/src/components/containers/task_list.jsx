import React, { useState, useEffect } from 'react';
//modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import '../../styles/task.scss'; //importar estilos 

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
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            console.log('Tasks component is going to unmount...');
        };
    }, [tasks]);//se ejecuta cada vez que escucha un cambio en tareas (tasks)

    const completedTask = (task) => {
        console.log('Completed this task: ', task);
        const index = tasks.indexOf(task);//obetener el indice dentro de la lista de tareas de la tarea que se envia desde el hijo
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //actauliza el estado del componente y este asu vez actualiza el mapeo ( iteracion ) de las tareas con el objetivo de mostrar la tarea actualizada
        setTasks(tempTask);//actualizar el estado con la nueva lista
    }

    const removeTask = (task) => {
        console.log('Remove this task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);//Removes elements from an array  --> inicia desde la posicion index y borra solo un elemento .splice(posicionParaEmpezar,ElementosBorrados)
        setTasks(tempTask);
    }

    const addTask = (task) => {
        console.log('Remove this task: ', task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    const Table = () => {
        return (
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
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    completed={completedTask}
                                    remove={removeTask}>
                                </TaskComponent>)
                        })
                    }
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are not new tasks</h3>
                <h4>Please create one task</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '20px'
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
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};



export default TaskListComponent;
