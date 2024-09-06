import { Login } from "./Components/Login/Login";
import { User } from "./Components/User/User";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Login />
      <User />
    </div>
  );
}
