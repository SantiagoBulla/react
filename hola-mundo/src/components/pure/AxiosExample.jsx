import React, { useState } from 'react';
import { getRandomUser } from '../../services/axiosServices';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     getNewUser();
    // }, []);


    const getNewUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results[0]);
                }
            })
            .catch((e) => alert(`Something went wrong ${e}`))
    }


    return (
        <div>
            <h1>Axios fetch user example</h1>
            {user != null ?
                (
                    <div>
                        <img alt='avatar' src={user.picture.large} />
                        <h2>{user.name.title} | {user.name.first}  {user.name.last} </h2>
                        <h3>{user.email}</h3>
                        <button onClick={getNewUser}>Generate another user</button>
                    </div>

                ) :
                (
                    <div>
                        <p>Generate a new user</p>
                        <button onClick={getNewUser}>Generate</button>
                    </div>
                )
            }

        </div >
    );
}

export default AxiosExample;
