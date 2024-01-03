import React, { useEffect, useState } from 'react';
import { getAllPageUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log(`All users ${response.data}`);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => alert(`Error while retreiving users ${error}`))
            .finally(() => {
                console.log('process finished');
                console.table(users);
            })
    }

    const getPageUsers = (page) => {
        getAllPageUsers(page)
            .then((response) => {
                console.log(`All pages users ${JSON.stringify(response.data)}`);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => alert(`Error while retreiving users ${error}`))
            .finally(() => {
                console.log('process finished');
                console.table(users);
            })

    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log(`User details ${JSON.stringify(response.data)}`);
                setSelectedUser(response.data);
            })
            .catch((error) => alert(`Error while retreiving user details ${error}`))
            .finally(() => {
                console.log('process finished');
                console.table(selectedUser);
            })
    }

    const authUser = () => {

        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log(`Token ${response.token}`);
                alert(`Token ${response.token}`);
                sessionStorage.setItem('token', response.token);
            })
            .catch((error) => alert(`Error while login user ${error}`))
            .finally(() => {
                console.log('process finished, redirect home');
            })
    }

    return (
        <div>
        {/**Login simulation */}
        <button onClick={authUser}>LOGIN</button>
            <h2>Users: </h2>
            {
                users.map((user, index) => (
                    <p key={index} onClick={() => obtainUserDetails(user.id)}>
                        {user.id} | {user.first_name} | {user.last_name}
                    </p>
                ))
            }
            <p>Showing {usersPerPage} users of {totalUsers} in total</p>

            <button onClick={() => getPageUsers(1)}>1</button>
            <button onClick={() => getPageUsers(2)}>2</button>

            <div>
                {selectedUser != null ?
                    (
                        <div>
                            <h3>User Details</h3>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img src={selectedUser.avatar} alt='avatar' style={{ height: '100px', width: '100px' }} />
                            <button onClick={() => setSelectedUser(null)}>Close details</button>
                        </div>
                    ) :
                    (<h6>Please click on a user to see its details</h6>)
                }
            </div>
        </div>
    );
}

export default FetchExample;
