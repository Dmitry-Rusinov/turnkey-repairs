import React from 'react';
import { useDispatch } from "react-redux"; 
import styles from './Header.module.scss';
import headerLogo from '../../images/headerLogo.svg'
import Navigate from '../Navigate/Navigate';
import { showOverlay, setType } from "../../store/modalSlice";

function Header() {
  const dispatch = useDispatch();

  const handleShowCallbackForm = () => {
    dispatch(setType('form'));
    dispatch(showOverlay());
  }

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={headerLogo} alt="Логотип" />
      <Navigate />
      <button onClick={handleShowCallbackForm} className={styles.button}>Обратный звонок</button>
    </div>
  )
}

export default Header

