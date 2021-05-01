import { useHistory } from 'react-router';
import './LandingPage.css'

export const SignInPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/signup");
    }

    return (

        <section className="container">
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <button className="button" onClick={() => alert("Checking!")}>
                Login
            </button>
            <button className="button" onClick={handleClick}>
                No Account?
            </button>
        </section>

    )

}