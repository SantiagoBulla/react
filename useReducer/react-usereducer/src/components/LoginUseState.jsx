import React, { useState } from 'react';

const LoginUseState = () => {

    //estado del componente
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(username, password);
            setIsLoggedIn(true);
            setLoading(false);
        } catch (error) {
            setError('Username or password was not found');
            setLoading(false);
            setUsername('');
            setPassword('');
        }
    }
    
    const login = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(username, password);
                if (username === 'admin' && password === 'admin') {
                    resolve();
                } else {
                    reject();
                }
            }, 3000);
        });
    }

    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false);
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome back, {username}</h1>
                            <button onClick={logout}>Logout</button>
                        </div>
                    ) :
                        (
                            <form onSubmit={submit}>
                                {
                                    error && <p style={{ color: 'tomato' }}>{error}</p>
                                }
                                <input
                                    type='text'
                                    placeholder='Enter your username'
                                    value={username}
                                    onChange={(e) => setUsername(e.currentTarget.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                />
                                <button type='submit'>
                                    {
                                        isLoading ? 'Loading...' : 'Login'
                                    }
                                </button>
                            </form>
                        )
                }
            </div>
        </div>
    );
}

export default LoginUseState;
