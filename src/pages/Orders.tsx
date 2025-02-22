import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Orders.module.scss';

const Orders: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.orderPage} ${isDarkTheme ? styles.dark : ''}`}>
      Orders Page
    </div>
  );
};

export default Orders;
