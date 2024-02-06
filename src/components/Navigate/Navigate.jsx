import React from 'react'
import { Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';

import styles from './Navigate.module.scss';

function Navigate() {
  return (
    <nav>
      <MenuList />
      <Link className={styles.link} to='/portfolio'>портфолио</Link>
      <Link className={styles.link} to='/prices'>цены</Link>
      <Link className={styles.link} to='/work-scheme'>схема работы</Link>
      <Link className={styles.link} to='/reviews'>отзывы</Link>
      <Link className={styles.link} to='/contacts'>контакты</Link>
      <Link className={styles.link} to='/warranty'>гарантия</Link>
    </nav>
  )
}

export default Navigate
