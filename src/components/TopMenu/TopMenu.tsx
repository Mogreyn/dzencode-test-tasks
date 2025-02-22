import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import logo from '@/assets/logo.png';
import styles from './TopMenu.module.scss';
import { useTheme } from '@/hooks/useTheme';

const socket = io('http://localhost:5173');

const TopMenu = () => {
  const [time, setTime] = useState(new Date());
  const [sessionCount, setSessionCount] = useState(0);
  const { isDarkTheme, toggleTheme } = useTheme();

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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`${styles.topMenu} ${isDarkTheme ? styles.dark : ''}`}>
      <div className={styles.topMenu__logo}>
        <img className={styles.topMenu__image} src={logo} alt="Logo" />
      </div>
      <div className={styles.topMenu__data}>
        <div className={styles.topMenu__time}>
          {time.toLocaleDateString()} {formatTime(time)}
        </div>
        <div className={styles.topMenu__sessions}>
          Sessions : {sessionCount}
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default TopMenu;
