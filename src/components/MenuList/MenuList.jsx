import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showOverlay, hiddenOverlay, setType } from "../../store/modalSlice";

import styles from "./MenuList.module.scss";

function MenuList() {
  const dispatch = useDispatch();
  const { isOverlay, type } = useSelector(
    (state) => state.modal
  );

  const handleShowDroplist = () => {
    dispatch(setType('list'));
    dispatch(showOverlay())
  }

  return (
    <>
      <div className={styles.dropdown}>
        <button
          onClick={() => dispatch(hiddenOverlay())}
          className={
            isOverlay && type === 'list'
              ? `${styles.closed} ${styles.closed_active}`
              : `${styles.closed}`
          }
        ></button>
        <button className={`${styles.dropdown__button}`} onClick={handleShowDroplist/* () => dispatch(showOverlay()) */}>
          меню
        </button>
        <ul
          className={
            isOverlay && type === 'list'
              ? `${styles.dropdown__list} ${styles.dropdown__list_visible}`
              : `${styles.dropdown__list}`
          }
        >
          <li className="dropdown__list-item">услуги</li>
          <li className="dropdown__list-item">статьи</li>
          <li className="dropdown__list-item">вакансии</li>
          <li className="dropdown__list-item">франшиза</li>
        </ul>
      </div>
      <div
        onClick={() => dispatch(hiddenOverlay())}
        className={
          isOverlay && type === 'list'
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
    </>
  );
}

export default MenuList;
