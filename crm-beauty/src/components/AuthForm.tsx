import { useRef } from 'react'
import { AuthData } from '../common/interfaces/AuthData'
import { useInput } from '../hooks/useInput'


interface AuthFormProps {
    onLogin: (authData: AuthData) => void;
}

export function AuthForm({ onLogin }: AuthFormProps) {

    const formRef = useRef<HTMLFormElement>();
    const userName = useInput('');
    const password = useInput('');

    const reset = () => {
        userName.reset();
        password.reset();
        formRef.current?.reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onLogin({
            userName: userName.value,
            password: password.value,
        });

        reset(); 
    };


    return (
        <form ref={formRef} onSubmit={handleSubmit}>  
            <label>
                <div>User name</div>
                <input type="text" name='userName' required {...userName} />
            </label>

            <label>
                <div>Password</div>
                <input type="password" name='password' required {...password} />
            </label>

            <button>Login</button>
        </form>
    )
}