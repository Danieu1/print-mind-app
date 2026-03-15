import React from 'react';
import { Sidebar } from '../../Sidebar/Sidebar';
import { Header } from '../Header';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom'; // 1. Importe o Outlet

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
        {/* 2. O Outlet é o espaço onde as páginas (Write, Chat, etc) vão aparecer */}
        <Outlet /> 
      </main>
    </div>
  );
}