import React from 'react';
//Material UI Components
import { Link, Typography } from '@mui/material';

const CopyRight = () => {
    return (
        <Typography variant='body2' color={"GrayText"} align='center'>
            {'Copyright (C)'}
            <Link color={"inherit"} href='https://imaginaformacion.com'>
                Imagina Formacion
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default CopyRight;
