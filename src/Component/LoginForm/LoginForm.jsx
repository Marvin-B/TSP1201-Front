// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        // Je définis une valeur, mais uniquement pour le test. Laisser vide sinon.
        login: 'user@user.fr',
        password: 'azerty'
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleLoginChange = (event) => {
        handleChange({
            key: 'email',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>

            <form id="login-form" onSubmit={handleSubmitForm}>
            <h1>Connectez-vous</h1>

                <div className = "box-form">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" id="username" name="username" placeholder="Entrez votre nom d'utilisateur. Exemple: John" onChange={handleLoginChange} value={credentials.login} />
                </div>

                <div className = "box-form">
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe." onChange={handlePasswordChange} value={credentials.password} />
                </div>
                <div className='credentials-and-password-container'>
                    <button
                        className='login-page-call-to-action'
                        type="submit"
                    >
                        Se connecter
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;
