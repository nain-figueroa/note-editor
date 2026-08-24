import styles from './Workspace.module.css';
import '../../../styles/variables.css';
import SideBar from '../sidebar/SideBar';
import EditorSpace from '../editor-space/EditorSpace';

function Workspace() {
    return (
        <div className={styles.workspace}>
            <SideBar />
            <EditorSpace />
        </div>
    );
}

export default Workspace;