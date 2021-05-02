import { useHistory } from 'react-router';

export const SignUpPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/login");
    }

    const handleRegister = () => {
        alert("Registering!");
        handleClick();
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <button className="button" onClick={handleRegister}>
                Register
            </button>
            <button className="button" onClick={handleClick}>
                Have An Account?
            </button>
        </div>

    )

}