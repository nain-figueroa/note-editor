import styles from './Workspace.module.css';
import '../styles/variables.css';
import SideBar from './SideBar';
import EditorSpace from './EditorSpace';

function Workspace() {
    return (
        <div className={styles.workspace}>
            <SideBar />
            <EditorSpace />
        </div>
    );
}

export default Workspace;