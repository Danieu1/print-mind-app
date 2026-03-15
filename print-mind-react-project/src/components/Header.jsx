// src/components/Header/Header.jsx (ou onde seu Header estiver)
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <span className={styles.searchIcon}>🔍</span>
      </div>
      
      <button className={styles.signUpBtn}>Sign Up</button>
    </header>
  );
}