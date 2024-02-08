import React, { useState } from "react";
import styles from "./RadioInput.module.scss";

function RadioInput({ text, inputId, name }) {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue("");
    setValue(e.target.id);
  };

  return (
    <div className={styles.radio_btn}>
      <label for={inputId}>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={handleChangeValue}
          className={styles.radio}
          id={inputId}
        />
        <span className={styles.border}></span>
      </label>
      <p className={styles.radio_description}>{text}</p>
    </div>
  );
}

export default RadioInput;
