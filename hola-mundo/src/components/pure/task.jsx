import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'; //añadir estilos
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, completed, remove }) => { //recibe un prop llamado task (contenido de una tarea)

    useEffect(() => {
        console.log('Task created succesfully');
        return () => {
            console.log(`Tasks: ${task.name} is going to unmount...`);
        };
    }, [task]);


    /**
     * comprobar y filtrar los tipos de niveles para devolver algo
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
            default:
                break;
        }
    }

    /**
     * 
     * @returns devuelve el icono dependiendo del estado de la tarea
     */
    const taskCompletedIcon = () => {
        if (task.completed) {
            return <i onClick={() => { completed(task) }} className='bi-toggle-on task-action' style={{ color: 'green', fontSize: 'large' }}></i>
        } else {
            return <i onClick={() => { completed(task) }} className='bi-toggle-off task-action' style={{ color: 'green', fontSize: 'large' }}></i>

        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>{/**ejecucion del la funcion con retorno */}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}{/**ejecucion de la funcion de retorno de icono */}
                <i onClick={() => { remove(task) }} className='bi-trash task-action' style={{ color: 'tomato', fontSize: 'large' }}></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,//el prop task sera de tipo clase Task y la declara como obligatoria
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
