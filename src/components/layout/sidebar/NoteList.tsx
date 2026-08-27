import Note from '../../shared/types/note';
import styles from './NoteList.module.css';

type Props = {
    notes: Note[];
    openNotes: Note[];
    addOpenNote: (notes: Note[]) => void;
};

function NoteList({ notes, openNotes, addOpenNote }: Props) {
    if (notes.length === 0) {
        return <p>No hay notas aún</p>;
    }

    return (
        <div className={styles['note-list']}>
            {notes.map((note) => (
                <div key={note.id} className={styles.note} onClick={(e) => addOpenNote([...openNotes, note])}>
                    <p style={{ margin: 0 }}>{note.name}</p>
                </div>
            ))
            }
        </div>
    );
}

export default NoteList;