import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showOverlay, hiddenOverlay } from "../../store/modalSlice";

import styles from "./CallbackForm.module.scss";
import contact from "../contact"

function CallbackForm() {
  const dispatch = useDispatch();
  const { isOverlay, type } = useSelector((state) => state.modal);

  return (
    <>
      <form
        className={
          isOverlay && type === "form"
            ? `${styles.container} ${styles.container_active}`
            : `${styles.container}`
        }
        id="email-form"
        method="post"
      >
        <h3>Форма рассылки</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 20,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <input
            className={styles.input}
            id="email"
            type="email"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
            placeholder="email"
            required
          />
          <button type="submit" className={styles.button}>Отправить</button>
        </div>
      </form>
      <div
        onClick={() => dispatch(hiddenOverlay())}
        className={
          isOverlay && type === "form"
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
      <script src="../contact.js"></script>
    </>
  );
}

export default CallbackForm;
