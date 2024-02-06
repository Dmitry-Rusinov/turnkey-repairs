import React from "react";
import { useState } from "react";
import styles from "./MenuList.module.scss";

function MenuList() {
  const [isOpenList, setIsOpenList] = useState(false);

  const showList = () => {
    setIsOpenList(true);
  };

  const hideList = () => {
    setIsOpenList(false);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button
          onClick={hideList}
          className={
            isOpenList
              ? `${styles.closed} ${styles.closed_active}`
              : `${styles.closed}`
          }
        ></button>
        <button className={`${styles.dropdown__button}`} onClick={showList}>
          меню
        </button>
        <ul
          className={
            isOpenList
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
        onClick={hideList}
        className={
          isOpenList
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
    </>
  );
}

export default MenuList;
