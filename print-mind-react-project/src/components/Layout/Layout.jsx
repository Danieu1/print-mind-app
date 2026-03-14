import React from 'react';
import styles from './Layout.module.css';

// 1. Header e MainContent estão SOLTOS em components, então subimos um nível e pegamos o arquivo direto
import { Header } from '../Header.jsx'; 
import { MainContent } from '../MainContent.jsx';

// 2. Sidebar ainda parece estar DENTRO de uma pasta Sidebar, então entramos nela
import { Sidebar } from '../../Sidebar/Sidebar.jsx';

export function Layout() {
  return (
    <div className={styles.gridContainer}>
      <header className={styles.headerArea}>
        <Header />
      </header>

      <aside className={styles.sidebarArea}>
        <Sidebar />
      </aside>

      <main className={styles.mainArea}>
        <MainContent />
      </main>
    </div>
  );
}