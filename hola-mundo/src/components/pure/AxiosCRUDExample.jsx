import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUserById, deletedUserById } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Mensaje de error en caso de cumplir la validacion de email')
            .required('Email is requires'),
        password: Yup.string()
            .required('Password is requires')
    }
)

const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
            })
            .catch((e) => {
                sessionStorage.removeItem('token');
                alert('Something went wrong', e)
            })
            .finally(console.log('Login process finished'))
    }

    //crud example
    const obtainsAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('Not users found');
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    const obtainsAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('Not users found in page: ', page);
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('User not found');
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    const createANewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not created');
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    const updateAUserById = (id, name, job) => {
        updateUserById(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not updated');
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    const deletedAUserById = (id) => {
        deletedUserById(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(`User with id ${id} successfully deleted`);
                } else {
                    throw new Error('User not updated');
                }
            })
            .catch((e) => {
                alert('Something went wrong', e)
            })
    }

    return (
        <div>
            <h3>Login Formik</h3>
            <Formik
                //configuracion del formik
                initialValues={initialCredentials} //valores inciales del formulario
                validationSchema={loginEsquema}//esquema de validacion de campos con yup
                onSubmit={async (values) => {
                    authUser(values)
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
            </Formik>
            {/**example buttons to test api reponses */}
            <div>
                <button onClick={obtainsAllUsers}>Get all Users with axios</button>
                <button onClick={() => obtainsAllPagedUsers(2)}>Get all Users (page 1) with axios</button>
                <button onClick={() => obtainUserById(5)}>Get user with id 5</button>
                <button onClick={() => createANewUser('morpheus', 'leader')}>Create user</button>
                <button onClick={() => updateAUserById(5, 'morpheus', 'developer')}>Update user</button>
                <button onClick={() => deletedAUserById(1)}>Deleted user</button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
