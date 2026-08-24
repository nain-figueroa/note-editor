import styles from './SideBar.module.css';
import '../styles/variables.css';

function SideBar() {
    return (
        <div className={styles.sidebar}>
            <header className={styles['project-title']}>Titulo del proyecto</header>
            <p>Este es el side bar</p>
            <footer className={styles['sidebar-footer']}>Aquí irá la info de la app y el botón de conf</footer>
        </div>
    );
}

export default SideBar;