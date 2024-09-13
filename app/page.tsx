import { AuthButtonServer } from "./api/AuthButton.server";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <AuthButtonServer />
      <SearchBar/>
    </div>
  );
}
