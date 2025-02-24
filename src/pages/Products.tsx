import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Products.module.scss';
import StoreCard from '@/components/StoreCard/StoreCard';

const Products: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.productPage} ${isDarkTheme ? styles.dark : ''}`}>
      <StoreCard />
    </div>
  );
};

export default Products;
