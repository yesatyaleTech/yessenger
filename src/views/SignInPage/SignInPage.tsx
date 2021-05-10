import styles from './SignInPage.module.css';
import { useHistory } from 'react-router';
import { Colors, ActionButton } from '../../components/ActionButton/ActionButton';
import { loginUser } from '../../state/actions/auth.actions';
import { connect, useDispatch } from 'react-redux';
import { AppState, initState } from '../../state/state';

type props = {
    user: AppState['user']
}

const SignInPage = (props: props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    if (props.user) {
        history.push("/app");
    }
    return (

        <section className={styles.pageContainer}>
            <div className={styles.authContainer}>
                <h1>Login</h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <section className={styles.memory}>
                    <input type="checkbox" name="memory" />
                    <label htmlFor="memory">Remember Me</label>
                </section>
                <div className={styles.buttonContainer}>
                    <ActionButton
                        onClick={() => { dispatch(loginUser("name", "pswd")) }}
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

const mapStateToProps = (state: AppState = initState) => {
    return { user: state.user }
}

export const LoginPage = connect(mapStateToProps)(SignInPage);