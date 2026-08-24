import styles from './EditorSpace.module.css';
import '../../../styles/variables.css';

function EditorSpace() {
    return (
        <div className={styles['editor-space']}>
            <header className={styles['notes-opened']}>Aquí van a estar las notas abiertas</header>
            <p>Aquí va a ser donde van a estar abiertas las ventanas y así</p>
        </div>
    );
}

export default EditorSpace;