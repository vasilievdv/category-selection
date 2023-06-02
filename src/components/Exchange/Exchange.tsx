import React from 'react';
import exchange from '../../assets/exchange.png';
import styles from './exchange.module.scss'

function Exchange() {
  return (
    <div className={styles.imgRow}>
      <img src={exchange} alt="exchage" className={styles.exchageImg} />
    </div>
  );
}

export default Exchange;
