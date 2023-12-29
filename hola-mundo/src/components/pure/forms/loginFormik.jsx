import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/**
 * Esquema de validación de campos con Yup
 */

const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Mensaje de error en caso de cumplir la validacion de email')
            .required('Email is requires'),
        password: Yup.string()
            .required('Password is requires')

    }
)

const LoginFormik = () => {

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
                onSubmit={async (values) => {//se indica que se debe hacer cuando haya un evento onSubmit
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    //guardar la data en el localstorage
                    localStorage.setItem('credentials', JSON.stringify(values));
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
                            {isSubmitting ? (<p>We're validating your credentials</p>) : null}
                        </Form>
                    )
                }}


                {/**Obetenemos props desde formik */}
                {/* {
                    props => {
                        const {
                            values, //obetener los valores del formulario
                            touched,//si el usuario ha tocado o no los campos,
                            errors, //si hay errores dentro del formulario,
                            isSubmitting, //si se ha terminado de enviar o no
                            handleChange, //si hay cambios en el formulario se puede controlar,
                            handleBlur, //cambios de foco en el form
                        } = props;

                        return (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />
                                {/**manejar los errores del email
                                {errors.email && touched.email && (
                                    <div className='error'><p>{errors.email.toString()}</p></div>
                                )}

                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" placeholder="Your password" type="password" />{/**define un campo del formulario 
                                {/**manejar los errores del email 
                                {errors.password && touched.password && (
                                    <div className='error'><p>{errors.password.toString()}</p></div>
                                )}

                                <button type="submit">Submit</button>
                                {isSubmitting ? (<p>We're validating your credentials</p>) : null}
                            </Form>
                        )
                    }

                } */}

            </Formik>
        </div>
    );
}

export default LoginFormik;
