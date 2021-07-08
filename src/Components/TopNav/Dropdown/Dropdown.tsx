import styles from './Dropdown.module.css';

type DDprops = {
    isOpen: boolean
}

export const Dropdown = ({isOpen}: DDprops) => {
    if(isOpen){
        return (
            <div className={styles.Dropdown}>
                
            </div>
        );
    }
    return <></>
}