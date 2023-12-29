import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    console.log('we are in: ', location.pathname);//obtiene la ruta actual 

    const navigate = useNavigate();
    return (
        <div>
            <h1>About | FAQs </h1>
            <div>
                <button onClick={() => navigate('/faqs')}>Forward</button>
                <button onClick={() => navigate(-1)} >Back</button>{/**declaracion para volver a la página inmediatamente anterior */}
            </div>
        </div>
    );
}

export default AboutPage;
