import React from 'react'
import styles from './Header.module.scss';
import headerLogo from '../../images/headerLogo.svg'
import Navigate from '../Navigate/Navigate';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={headerLogo} alt="Логотип" />
      <Navigate />
      <button className={styles.button}>Обратный звонок</button>
    </div>
  )
}

export default Header

