import TitleBar from "./components/TitleBar";
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.container}>
            <TitleBar />
            <h1>¡Ya jalo React en Electron!</h1>
        </div>
    );
}