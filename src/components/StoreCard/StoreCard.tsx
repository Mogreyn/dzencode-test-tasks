import styles from './StoreCard.module.scss';
import { StoreCardProps } from '../../types/StoreCard.types';
import { fetchData } from '@/utils/fetchData';
import React, { useEffect, useState } from 'react';
import convertCurrency from '@/utils/convertCurrency';
import { useTheme } from '@/hooks/useTheme';

const StoreCard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<StoreCardProps[] | null>(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div
      className={`${styles.store} ${isDarkTheme ? styles['store--dark'] : ''}`}
    >
      {isLoaded ? (
        data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.serial} className={styles['store__card']}>
              <img
                src={item.image}
                alt={item.title}
                className={styles['store__image']}
              />
              <h2 className={styles['store__title']}>{item.title}</h2>
              <p className={styles['store__info']}>{item.description}</p>
              <p className={styles['store__sell']}>{item.sellDate}</p>
              <p className={styles['store__serial']}>Serial: {item.serial}</p>
              <div>
                {' '}
                <p className={styles['store__price']}>{item.price} USD</p>
                <p className={styles['store__price']}>
                  {convertCurrency(item.price)} UAH
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={styles['store__message']}>No data available</p>
        )
      ) : (
        <p className={styles['store__message']}>Loading...</p>
      )}
    </div>
  );
};

export default StoreCard;
