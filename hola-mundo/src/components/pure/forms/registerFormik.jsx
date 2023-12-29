import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//modelo
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {

    const intialUserValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        rol: ROLES.USER
    }

    // const submit = (values) => {
    //     alert(`Register user ${values}`);
    // }


    //esquema de validacion
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username to short')
                .max(15, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            rol: Yup.string()
                .oneOf(
                    [ROLES.USER, ROLES.ADMIN],
                    'You must select a user rol'
                )
                .required('Rol is required'),
            password: Yup.string()
                .min(8, 'password must have 8 characteres')
                .required('password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match'
                    )
                }).required('You must confirm the password')


        }
    )

    return (
        <div>
            <h3>Register Formik</h3>
            <Formik
                initialValues={intialUserValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {//se indica que se debe hacer cuando haya un evento onSubmit
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form>

                            <label htmlFor="username">Username</label>
                            <Field id="username" name="username" placeholder="Enter the username" type="text" />
                            {errors.username && touched.username && (
                                <ErrorMessage name="username" component='div' />
                            )}

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                            {errors.email && touched.email && (
                                <ErrorMessage name="email" component='div' />
                            )}

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="Your password" type="password" />
                            {errors.password && touched.password && (
                                <ErrorMessage component='div' name='password' />
                            )}

                            <label htmlFor="confirm">Confirm password</label>
                            <Field id="confirm" name="confirm" placeholder="Confirm your password" type="password" />
                            {errors.confirm && touched.confirm && (
                                <ErrorMessage component='div' name='confirm' />
                            )}

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>We're creating your account</p>) : null}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
}

export default RegisterFormik;