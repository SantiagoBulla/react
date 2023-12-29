import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    console.log('we are in: ', location.pathname);//obtiene la ruta actual 
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>
                Go to profile
            </button>
            <button onClick={() => navigate(-1)}>
                Go back
            </button>
        </div>
    );
}

export default HomePage;
