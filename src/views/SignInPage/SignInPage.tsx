import { useHistory } from 'react-router';
import styles from './SignInPage.module.css';
import {Colors, ActionButton} from '../../Components/ActionButton/ActionButton';

export const SignInPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/signup");
    }

    return (

        <section className={styles.pageContainer}>
            <div className={styles.authContainer}>
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <section >
            <input type="checkbox" name="memory"/>
            <label htmlFor="memory">Remember Me</label>
            </section>
            <div className={styles.buttonContainer}>
            <ActionButton 
                onClick={() => alert("Checking!")}
                color={Colors.Medium}
            >
                Login
            </ActionButton>
            
            </div>
            <span className={styles.noAcc}>
                No account?&nbsp;&nbsp;
                <a href="/sign-up">
                    Sign Up Now
                </a>
            </span>
            </div>
        </section>

    )

}