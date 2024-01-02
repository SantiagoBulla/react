import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }


    async function generatePromiseNumber() {
        return Promise.resolve(3);
    }

    function getNumber() {
        generateNumber()
            .then((response) => alert(`Response ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))
    }

    function getPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }


    function showStorage() {
        saveSessionStorage('name', 'santi')
            .then((response) => alert(`Saved name ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))
            .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function getMessages() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello world')
            }, 2000);
        })

        let message = await promise;

        await alert(`Message received ${message}`);
    }


    const returnError = async () => {
        await Promise.reject(new Error('Opps you have an error'));
    }

    const handleError = () => {
        returnError()
            .then((response) => alert(`Everything is ok ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))
            .finally(() => alert('Finally excecuted'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com');
            alert(`Response ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}, please check your console for detail`);
        }
    }

    const multiplePromise = async () => {
        let result = Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch((e) => alert(`Something went wrong with your URL: ${e}, please check your console for detail`))
    }


    return (
        <div>
            <h1>Async Promise examples</h1>
            <button onClick={getNumber}>Get Number</button>
            <button onClick={getPromiseNumber}>Get PromiseNumber</button>
            <button onClick={showStorage}>Save Name and show</button>
            <button onClick={getMessages}>Send message with 2 sec delay</button>
            <button onClick={handleError}>Get promise error</button>
            <button onClick={urlNotFound}>Get url fetch error </button>
            <button onClick={multiplePromise}>Get multiple promises responses </button>
        </div>
    );
}

export default AsyncExample;
