import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Products.module.scss';

const Products: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.productPage} ${isDarkTheme ? styles.dark : ''}`}>
      Products Page
    </div>
  );
};

export default Products;
