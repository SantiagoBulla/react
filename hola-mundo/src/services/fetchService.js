export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    //parse json
    return response.json();
}

export const getAllPageUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response service 2 :', JSON.stringify(response));
    //parse json
    return response.json();
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response user data :', JSON.stringify(response));
    //parse json
    return response.json();
}

export const login = async (email, password) => {
    let body = {
        email: email,
        password: password
    }

    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body: JSON.stringify(body)
    });

    return response.json();
}