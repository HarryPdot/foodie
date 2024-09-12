import styles from "./page.module.css";
import { AuthButtonServer } from "./api/AuthButton.server";


export default function Home() {
  return (
    <div className={styles.page}>
      <AuthButtonServer/>
    </div>
  );
}
