import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import TopMenu from '@/components/TopMenu/TopMenu';
import styles from './Layout.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { LayoutProps } from '@/types/Layout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useTheme();
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    '/': 'Products',
    '/products': 'Products',
    '/orders': 'Orders',
  };

  const title = pageTitles[location.pathname] || 'DZEN';

  return (
    <>
      <Helmet>
        <title>{title} | DZEN</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <div className={`${styles.layout} ${isDarkTheme ? styles.dark : ''}`}>
        <header className={styles.layout__top}>
          <TopMenu />
        </header>
        <div className={styles.layout__content}>
          <NavigationMenu />
          <main className={styles.layout__page}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
