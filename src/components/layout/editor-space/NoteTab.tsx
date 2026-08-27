import { X } from 'lucide-react';
import Note from '../../shared/types/note';
import IconButton from '../../ui/IconButton';
import styles from './NoteTab.module.css';

type Props = {
    note: Note;
    viewNote: (content: string) => void;
    viewTitle: (title: string) => void;
};

function CloseNote() {
    console.log('nota cerrada');
}

function getContentNote(note: Note) {
    return note.path;
}

function getTitleNote(note: Note) {
    return note.name;
}

function NoteTab({ note, viewNote, viewTitle }: Props) {

    return (
        <div className={styles['note-tab']} >
            <p style={{ margin: 0 }} onClick={(e) => {
                viewNote(getContentNote(note));
                viewTitle(getTitleNote(note));
            }} >{note.name}</p>
            <IconButton icon={<X size={18} />} label='Close Note' onClick={CloseNote} />
        </div>
    );
}

export default NoteTab;