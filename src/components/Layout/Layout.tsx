import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import TopMenu from '@/components/TopMenu/TopMenu';
import styles from './Layout.module.scss';
import { useTheme } from '@/hooks/useTheme';

const Layout: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.layout} ${isDarkTheme ? styles.dark : ''}`}>
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
