import { Login } from "./Components/Login/Login";
import { User } from "./Components/User/User";
import styles from "./page.module.css";
import { create } from "./api/Google/GooglePlace";

export default function Home() {
  create(1)
  return (
    <div className={styles.page}>
      <Login />
      <User />
      <div>{}</div>
    </div>
  );
}
