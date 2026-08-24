import IconButton from '../../ui/IconButton';
import styles from './SideBar.module.css';
import '../../../styles/variables.css';
import { Folder, MailQuestionMark, Plus, Settings } from 'lucide-react';
import { useState } from 'react';
import Note from '../../shared/types/note';
import NoteList from './NoteList';

function SideBar() {
    const [notes, setNote] = useState<Note[]>([
        { id: 1, name: 'Goku', path: 'ruta/a/nota', creation_date: new Date(), modification_date: new Date() },
        { id: 2, name: 'Tangamandapio', path: 'ruta/a/nota', creation_date: new Date(), modification_date: new Date() },]
    );


    function AddNote() {
        console.log('Nota agregada');
    }

    function AddGroup() {
        console.log('Grupo agregado');
    }

    return (
        <div className={styles.sidebar}>
            <header className={styles['project-title']}>Titulo del proyecto</header>
            <div className={styles['button-bar']}>
                <IconButton icon={<Plus size={18} />} label='Add Note' onClick={AddNote} />
                <IconButton icon={<Folder size={18} />} label='Add Group' onClick={AddGroup} />
            </div>
            <NoteList notes={notes} />
            <footer className={styles['sidebar-footer']}>
                <IconButton icon={<MailQuestionMark size={18} />} label='Add Group' onClick={viewProgramInfo} />
                <IconButton icon={<Settings size={18} />} label='Add Group' onClick={openSettings} />
            </footer>
        </div>
    );
}

function openSettings() {
    console.log('Configuración abierta');
}

function viewProgramInfo() {
    console.log('Editor de notas mamalon');
}

export default SideBar;