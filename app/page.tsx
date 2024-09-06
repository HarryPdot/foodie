import styles from "./page.module.css";
import { Login } from "./Components/Login/Login";

export default function Home() {
  return (
    <div className={styles.page}>
      <Login/>
    </div>
  );
}
