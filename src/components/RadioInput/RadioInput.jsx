import React from "react";
import { useDispatch } from "react-redux"
import { setQtyRoomValue, setRoomValue } from "../../store/formSlice";

import styles from "./RadioInput.module.scss";

function RadioInput({ text, inputId, name }) {

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    if(name === "apartment") {
      dispatch(setRoomValue(e.target.id))
    } else {
      dispatch(setQtyRoomValue(e.target.id))
    }
  };

  return (
    <div className={styles.radio_btn}>
      <label for={inputId}>
        <input
          type="radio"
          name={name}
          onChange={handleChangeValue}
          className={styles.radio_input}
          id={inputId}
        />
        <span className={styles.border_img}></span>
      </label>
      <p className={styles.radio_description}>{text}</p>
    </div>
  );
}

export default RadioInput;
