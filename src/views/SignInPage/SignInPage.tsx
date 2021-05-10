import styles from './SignInPage.module.css';
import {Colors, ActionButton} from '../../components/ActionButton/ActionButton';
import {loginUser} from '../../state/actions/auth.actions';
import { connect, useDispatch } from 'react-redux';

const SignInPage = () => {
    const dispatch = useDispatch();
    return (

        <section className={styles.pageContainer}>
            <div className={styles.authContainer}>
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <section className={styles.memory}>
            <input type="checkbox" name="memory"/>
            <label htmlFor="memory">Remember Me</label>
            </section>
            <div className={styles.buttonContainer}>
            <ActionButton 
                onClick={() => {dispatch(loginUser("name", "pswd"))}}
                color={Colors.Medium}
            >
                Login
            </ActionButton>
            
            </div>
            <span className={styles.noAcc}>
                No account?&nbsp;&nbsp;
                <a href="/signup">
                    Sign Up Now
                </a>
            </span>
            </div>
        </section>

    )

}

export const LoginPage = connect()(SignInPage);