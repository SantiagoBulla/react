import React, { useState } from 'react';

// ? estilo para usuario logueado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

// ? estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout button

const LoginButton = ({ loginAction, style }) => {
    return (
        <div>
            <button style={style} onClick={loginAction}>Login</button>
        </div>
    );
}
const LogoutButton = ({ loginAction, style }) => {
    return (
        <div>
            <button style={style} onClick={loginAction}>Logout</button>
        </div>
    );
}


// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    if (access) {
        // optionalButton = <button onClick={updateAccess}>Logout</button>
        optionalButton = <LogoutButton style={unloggedStyle} loginAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton style={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/**optional button */}
            {optionalButton}
            {/**N Messages unread */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message</p>} */}
            {/* {nMessages > 1 && <p>You have {nMessages} new messages</p>}*si la condición se cumple se renderiza la <p> */}
            {/* {nMessages === 0 && <p>There are no messages</p>} */}
            {/**Operador ternario 
            * condición && / || condiciones ? salida a condición true : salida a condición false
            */}
            {access ? (
                <div>
                    {nMessages > 0 || nMessages === 1 ? <p>You have {nMessages} new message</p> : <p>There are no messages</p>}
                    <button onClick={addMessages}>
                        {nMessages === 0 ? 'Add your first message' : 'Add new Message'}
                    </button>
                </div>)
                : null}
        </div>
    );
}

export default OptionalRender;
