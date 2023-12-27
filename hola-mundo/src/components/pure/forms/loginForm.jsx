/**
 * Componente formulario para inicio de sesión
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [{
        user: '',
        password: ''
    }]

    const [credentials, setcredentials] = useState(initialCredentials);

    return (
        <div>

        </div>
    );
}

export default LoginForm;
