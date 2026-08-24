import styles from './TitleBar.module.css';
import '../styles/variables.css';

function TitleBar() {
    return (
        <div className={styles['title-bar']}>
            <span>Note Editor</span>
        </div>
    );
}

export default TitleBar;
