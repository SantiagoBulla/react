export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    //parse json
    return response.json();
}