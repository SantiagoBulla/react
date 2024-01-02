import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {

    const navigate = useNavigate();

    const loggout = () => {
        navigate('/login');
    }
    return (
        <div>
            <Button variant="contained" onClick={loggout}>Logout</Button>
            <CopyRight />
        </div>
    );
}

export default DashBoard;
