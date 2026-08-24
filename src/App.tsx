import TitleBar from "./components/TitleBar";
import Workspace from "./components/Workspace";
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.container}>
            <TitleBar />
            <Workspace />
        </div>
    );
}