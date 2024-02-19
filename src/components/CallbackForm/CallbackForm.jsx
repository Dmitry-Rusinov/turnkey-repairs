import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showOverlay, hiddenOverlay } from "../../store/modalSlice";

import styles from "./CallbackForm.module.scss";

function CallbackForm() {
  const dispatch = useDispatch();
  const { isOverlay, type } = useSelector((state) => state.modal);
  return (
    <>
      <div
        className={
          isOverlay && type === "form"
            ? `${styles.container} ${styles.container_active}`
            : `${styles.container}`
        }
      >
        <h3>Форма рассылки</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: "row",
            height: 20,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <input
            className={styles.input}
            type="email"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
          />
          <button className={styles.button}>Отправить</button>
        </div>
      </div>
      <div
        onClick={() => dispatch(hiddenOverlay())}
        className={
          isOverlay && type === "form"
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
    </>
  );
}

export default CallbackForm;
