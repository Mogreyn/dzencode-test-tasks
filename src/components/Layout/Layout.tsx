import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import TopMenu from '@/components/TopMenu/TopMenu';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout__top}>
        <TopMenu />
      </header>
      <div className={styles.layout__content}>
        <NavigationMenu />
        <main className={styles.layout__page}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
