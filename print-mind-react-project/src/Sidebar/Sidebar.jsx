import React from 'react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        {/* Aqui você pode colocar sua imagem de logo depois */}
        <div className={styles.logoIcon}></div>
        <h1 className={styles.logoText}>print-mind</h1>
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>Functions</p>
        <div className={styles.card}>
          <div className={styles.item}><span className={styles.icon}>T</span> write</div>
          <div className={styles.item}><span className={styles.icon}>💬</span> chat</div>
          <div className={styles.item}><span className={styles.icon}>👁️</span> see</div>
          <div className={styles.item}><span className={styles.icon}>📄</span> pages</div>
          <div className={styles.item}><span className={styles.icon}>📅</span> calendar</div>
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>Preferences</p>
        <div className={styles.card}>
          <div className={styles.item}><span className={styles.icon}>ℹ️</span> about us</div>
          <div className={styles.item}><span className={styles.icon}>⚙️</span> settings</div>
          <div className={styles.item}><span className={styles.icon}>Aあ</span> language</div>
        </div>
      </div>
    </aside>
  );
}