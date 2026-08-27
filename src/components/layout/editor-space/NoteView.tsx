import { useEffect, useReducer, useRef, useState } from 'react';
import styles from './NoteView.module.css';

type Props = {
    actualTitle: string
    actualContent: string;
}

function NoteView({ actualContent, actualTitle }: Props) {
    const [content, setContent] = useState(actualContent);

    useEffect(() => {
        setContent(actualContent);
    }, [actualContent]);

    if (actualContent === '') {
        return <p>Ninguna nota abierta</p>;
    }

    return (
        <div className={styles['note-view']}>
            <h1 className={styles.title}>{actualTitle}</h1>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className={styles['note-editor']}></textarea>
        </div>
    );
}

export default NoteView;