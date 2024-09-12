import { AuthButtonServer } from "./api/AuthButton.server";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <AuthButtonServer />
    </div>
  );
}
