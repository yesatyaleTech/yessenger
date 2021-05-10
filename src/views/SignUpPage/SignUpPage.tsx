import styles from './SignUpPage.module.css';
import { ActionButton, Colors } from '../../components/ActionButton/ActionButton';
import { connect, useDispatch } from 'react-redux';
import { signupUser } from '../../state/actions/auth.actions';

const Register = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.pageContainer}>
            <div className={styles.authContainer}>
                <h1>Register</h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <div className={styles.buttonContainer}>
                    <ActionButton
                        onClick={() => {
                            dispatch(signupUser("ross", "pswrd"));
                            console.log("done");
                        }}
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
        </div >

    )

}

export const SignUpPage = connect()(Register);