import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';


const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')

    }
);

const LoginForm = ({ loged, fetching, onLogin }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h3>Login Formik</h3>
            <Formik
                //configuracion del formik
                initialValues={initialCredentials} //valores inciales del formulario
                validationSchema={loginEsquema}//esquema de validacion de campos con yup
                onSubmit={async (values) => {
                    //peticion
                    onLogin(values.email, values.password)
                }}
            >

                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                            {/**manejar los errores del email */}
                            {errors.email && touched.email && (
                                {/* <div className='error'><p>{errors.email.toString()}</p></div> */ },
                                <ErrorMessage name="email" component='div' />
                            )}

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="Your password" type="password" />{/**define un campo del formulario */}
                            {/**manejar los errores del email */}
                            {errors.password && touched.password && (
                                {/* <div className='error'><p>{errors.password.toString()}</p></div> */ },
                                <ErrorMessage component='div' name='password' />
                            )}

                            <button type="submit">Submit</button>
                            {fetching ? (<p>LOADING...</p>) : null}
                            {isSubmitting ? (<p>We're validating your credentials</p>) : null}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
