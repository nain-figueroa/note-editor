import { useState } from 'react';
import styles from './EditorSpace.module.css';
import '../../../styles/variables.css';
import NoteTab from './NoteTab';
import NoteView from './NoteView';
import Note from '../../shared/types/note';

type Props = {
    openNotes: Note[];
};

function EditorSpace({ openNotes }: Props) {
    const [contentNote, setContentNote] = useState('');
    const [titleNote, setTitleNote] = useState('');

    return (
        <div className={styles['editor-space']}>
            <header className={styles['notes-opened']}>
                {openNotes.map((openNote) => (
                    <NoteTab key={openNote.id} note={openNote} viewNote={setContentNote} viewTitle={setTitleNote} />
                )
                )}
            </header>
            <NoteView actualTitle={titleNote} actualContent={contentNote} />
        </div>
    );
}

export default EditorSpace;