import React from "react";
import ReactInputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";

import { hiddenOverlay } from "../../store/modalSlice";
import { useFormValidation } from "../utils/useFormValidation";

import styles from "./CallbackForm.module.scss";

function CallbackForm() {
  const dispatch = useDispatch();
  const { isOverlay, type } = useSelector((state) => state.modal);
  const { errors, values, isValid, handleChange } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputData = {
      name: values.name,
      about: values.about,
      phone: values.phone,
      email: values.email,
    };

    console.log(inputData);

    const response = () => {
      return fetch("mail.php", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      })
      .then((data) => {
        dispatch(hiddenOverlay());
        return data})
    };
    response();
  };

  return (
    <>
      <form
        className={
          isOverlay && type === "form"
            ? `${styles.container} ${styles.container_active}`
            : `${styles.container}`
        }
        id="email-form"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <h3>Форма рассылки</h3>
        <label for="name">Ваше имя</label>
        <input
          type="text"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          className={styles.input}
          placeholder="Имя"
          pattern="^[а-яА-Яa-zA-Z\s\-]+$"
          minLength="2"
          required
        />
        <span className={styles.error}>{errors.name}</span>
        <label for="about">Расскажите о себе</label>
        <textarea
          name="about"
          id=""
          cols="30"
          rows="4"
          value={values.about || ""}
          placeholder="Опишите кратко, чем вы занимаетесь"
        ></textarea>
        <label for="phone">Телефон для связи</label>
        <ReactInputMask
          name="phone"
          id="phone"
          className={styles.input}
          mask="+7\-999-999-99-99"
          pattern="\+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          maskChar=" "
          value={values.phone || ""}
          placeholder="+7-___-___-__-__"
          onChange={handleChange}
          required
        />
        <span className={styles.error}>{errors.phone}</span>
        <label for="email">Электронная почта</label>
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
            name="email"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
            placeholder="email"
            value={values.email || ""}
            maxlength="25"
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <button type="submit" className={styles.button} disabled={!isValid}>
            Отправить
          </button>
        </div>
        <span className={styles.error}>{errors.email}</span>
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
