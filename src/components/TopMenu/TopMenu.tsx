import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styles from './TopMenu.module.scss';

const socket = io('http://localhost:5173');

const TopMenu = () => {
  const [time, setTime] = useState(new Date());
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    socket.on('sessionCount', (count: number) => {
      setSessionCount(count);
    });

    return () => {
      clearInterval(interval);
      socket.off('sessionCount');
    };
  }, []);

  return (
    <div className={styles.topMenu}>
      <div className={styles.topMenu__logo}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className={styles.topMenu__data}>
        <div className={styles.topMenu__time}>
          {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </div>
        <div className={styles.topMenu__sessions}>
          Активных сессий: {sessionCount}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
