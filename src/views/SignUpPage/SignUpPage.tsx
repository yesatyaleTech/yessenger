import { useHistory } from 'react-router';
import styles from './SignUpPage.module.css';
import {ActionButton, Colors} from '../../components/ActionButton/ActionButton';

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
        <div className={styles.pageContainer}>
            <div className={styles.authContainer}>
            <h1>Register</h1>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <div className={styles.buttonContainer}>
            <ActionButton 
                onClick={handleRegister}
                color={Colors.Medium}
            >
                Register
            </ActionButton>
            </div>
            <span className={styles.haveAcc}>
                Have an account?&nbsp;&nbsp;
                <a href="/login">
                    Login
                </a>
            </span>
            </div>
        </div>

    )

}