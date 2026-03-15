import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logoFull from '../assets/logo_print_mind.png';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logoFull} alt="Logo" className={styles.logoImage} />
      </div>

      <nav className={styles.group}>
        <p className={styles.groupTitle}>Functions</p>
        <div className={styles.card}>
          {/* NavLink muda a URL sem recarregar a página */}
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeItem : styles.item}>
            <span className={styles.icon}>T</span> write
          </NavLink>
          
          <NavLink to="/chat" className={({ isActive }) => isActive ? styles.activeItem : styles.item}>
            <span className={styles.icon}>💬</span> chat
          </NavLink>

          <NavLink to="/see" className={({ isActive }) => isActive ? styles.activeItem : styles.item}>
            <span className={styles.icon}>👁️</span> see
          </NavLink>

          <NavLink to="/pages" className={({ isActive }) => isActive ? styles.activeItem : styles.item}>
            <span className={styles.icon}>📄</span> pages
          </NavLink>
          
          <NavLink to="/calendar" className={({ isActive }) => isActive ? styles.activeItem : styles.item}>
            <span className={styles.icon}>📅</span> calendar
          </NavLink>

        </div>
      </nav>
    </aside>
  );
}