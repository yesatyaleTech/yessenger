import styles from './NotificationPane.module.css';
import Notification from '../../models/Notification';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState, initState } from '../../state/state';
import { clearNotifications } from '../../state/actions/notifier.actions';
import errorimage from '../../images/error.svg';
import information from '../../images/information.svg';
import close from '../../images/close.svg';
import arrow from '../../images/arrow.svg';
type Props = {
    notifications: Array<Notification>
}

const NotificationViewer = (props: Props) => {
    const [notification, setstate] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (notification !== 0 && (notification < 0 || notification === props.notifications.length)) {
            dispatch(clearNotifications())
            setstate(0);
        }
    }, [notification, dispatch, props.notifications.length]);
    if (props.notifications.length === 0 || notification < 0 || notification === props.notifications.length) {
        return (
            <>
            </>
        )
    }
    let displayimage;
    if (props.notifications[notification].isError) {
        displayimage = errorimage;
    } else {
        displayimage = information;
    }
    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={() => {
                dispatch(clearNotifications());
                setstate(0);
            }}>
                <img src={close} />
            </button>
            <img src={displayimage} className={styles.displayimage} />
            {props.notifications[notification].message}
            <div className={styles.buttonContainer}>
                <button
                    className={styles.last}
                    onClick={() => setstate(notification - 1)}
                >
                    <img src={arrow} />
                </button>
                <button
                    className={styles.next}
                    onClick={() => setstate(notification + 1)}
                >
                    <img src={arrow} />
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppState = initState) => {
    return { notifications: state.notifications }
}

export const NotificationPane = connect(mapStateToProps)(NotificationViewer);