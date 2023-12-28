import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();//prevenir el recargue de la pagina
        //generar la nueva tarea
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);//llamar a la funcion padre y enviar la nueva tarea para que esta sea agregada
    }
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Write the name task' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Write the description'/>
                <label htmlFor='selectLevel' className='sr-only'>Select the priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>NORMAL</option>
                    <option value={LEVELS.URGENT}>URGENT</option>
                    <option value={LEVELS.BLOCKING}>BLOCKING</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add Task</button>
        </form>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default TaskForm;
