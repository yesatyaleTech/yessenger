import styles from './NotificationPane.module.css';
import Notification from '../../models/Notification';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState, initState } from '../../state/state';
import { clearNotifications } from '../../state/actions/notifier.actions';
type Props = {
    notifications: Array<Notification>
}

const NotificationViewer = (props: Props) => {
    const [notification, setstate] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (notification !== 0 && (notification < 0 || notification === props.notifications.length)) {
            dispatch(clearNotifications())
        }
    });
    if (props.notifications.length === 0 || notification < 0 || notification === props.notifications.length) {
        return (
            <>
            </>
        )
    }
    return (
        <div className={styles.container}>

            <img src="" />
            {props.notifications[notification].message}
            <button onClick={() => setstate(notification - 1)}>
                last
            </button>
            <button onClick={() => setstate(notification + 1)}>
                next
            </button>
        </div>
    );
}

const mapStateToProps = (state: AppState = initState) => {
    return { notifications: state.notifications }
}

export const NotificationPane = connect(mapStateToProps)(NotificationViewer);