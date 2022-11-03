import { Link } from 'react-router-dom';
import styles from './menu.module.css';

const Menu = () => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link className={styles.link} to='/'>Home Page</Link>
                    <Link className={styles.link} to='/catApp'>Cat App</Link>
                    <Link className={styles.link} to='/weatherApp'>Weather App</Link>
                    <Link className={styles.link} to='/youtubeApp'>YouTube App</Link>
                </div>

            </header>
        </>
    )
}

export default Menu;