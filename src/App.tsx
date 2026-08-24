import TitleBar from "./components/layout/titlebar/TitleBar";
import Workspace from "./components/layout/workspace/Workspace";
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.container}>
            <TitleBar />
            <Workspace />
        </div>
    );
}