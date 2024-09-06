import { Logging } from "./Components/Login/Logging";
import { User } from "./Components/User/User";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Logging />
      <User />
    </div>
  );
}
