import { ReactNode } from 'react';
import styles from './IconButton.module.css';
import '../../styles/variables.css';

type Props = {
    icon: ReactNode;
    label: string;
    onClick: () => void;
};

function IconButton({ icon, label, onClick }: Props) {
    return (
        <button className={styles['button-icon']} aria-label={label} onClick={onClick}>
            {icon}
        </button>
    );
}

export default IconButton;