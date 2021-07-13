import styles from './Menu.module.css';

type DDprops = {
    isOpen: boolean
}

export const Menu = ({isOpen}: DDprops) => {
    if(isOpen){
        return (
            <div className={styles.Dropdown}>
                
            </div>
        );
    }
    return <></>
}