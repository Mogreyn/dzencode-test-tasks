import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.scss';
import { useTheme } from '@/hooks/useTheme';

const NavigationMenu: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <nav className={`${styles.nav} ${isDarkTheme ? styles.dark : ''}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="/products" className={styles.nav__link}>
            Products
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/orders" className={styles.nav__link}>
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
