import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";


const LoginPage = () => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        try {
            //TODO Make Login call
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(credentials));
                localStorage.setItem('token', data.token);
                window.location.href = '/';
            } else {
                console.log(data);
            }
        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return(
        <div>

            <LoginForm
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default LoginPage;