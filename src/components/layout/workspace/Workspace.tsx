import styles from './Workspace.module.css';
import '../../../styles/variables.css';
import SideBar from '../sidebar/SideBar';
import EditorSpace from '../editor-space/EditorSpace';
import { useState } from 'react';
import Note from '../../shared/types/note';

function Workspace() {
    const [openNotes, setOpenNotes] = useState<Note[]>([]);
    return (
        <div className={styles.workspace}>
            <SideBar openNotes={openNotes} addOpenNote={setOpenNotes} />
            <EditorSpace openNotes={openNotes} />
        </div>
    );
}

export default Workspace;