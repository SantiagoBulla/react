import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'; //importar estilos 

//cuando se haga un llamado a este componente (función) se ejecuta la función y devuelve algo
const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //estado del componente 
    const [tasks, setTasks] = useState({ defaultTask });
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
            <div>
                <h1>Your Task:</h1>
                {/*TODO Aplicar un for/map para renderizar una lista de taraes */}
                <TaskComponent task={defaultTask}></TaskComponent>{/**se llama el componente y se le pasa defaultTask como prop para que el componente renderice esa información */}
            </div>

        </div>
    );
};



export default TaskListComponent;
