import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log(`All users ${response.data}`);
                setUsers(response.data);
            })
            .catch((error) => alert(`Error while retreiving users ${error}`))
            .finally(() => {
                console.log('process finished');
                console.table(users);
            })
    }

    return (
        <div>
            <h2>Users: </h2>
            {
                users.map((user, index) => (
                    <p key={index}>{user.id} | {user.first_name} | {user.last_name}</p>
                ))
            }
        </div>
    );
}

export default FetchExample;
