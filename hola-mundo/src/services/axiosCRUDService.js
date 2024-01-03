import axios from "axios";

/**
 * Login method to ReqRes endpoint
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {

    const body = {
        email: email,
        password: password
    }

    //returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

// obtains all users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

// obtain all paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// obtain user by id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// create user
export const createUser = (name, job) => {

    const body = {
        name: name,
        job: job
    }

    //returns the response with a Promise
    return axios.post('https://reqres.in/api/users', body)
}

// update user
export const updateUserById = (id, name, job) => {

    const body = {
        name: name,
        job: job
    }

    //returns the response with a Promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// delete user
export const deletedUserById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}