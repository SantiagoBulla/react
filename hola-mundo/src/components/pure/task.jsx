import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'; //añadir estilos
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => { //recibe un prop llamado task (contenido de una tarea)

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
            return <i className='bi-toggle-on' style={{ color: 'green', fontSize: 'large' }}></i>
        } else {
            return <i className='bi-toggle-off' style={{ color: 'green', fontSize: 'large' }}></i>

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
                <i className='bi-trash' style={{ color: 'tomato', fontSize: 'large' }}></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),//el prop task sera de tipo clase Task
};


export default TaskComponent;
