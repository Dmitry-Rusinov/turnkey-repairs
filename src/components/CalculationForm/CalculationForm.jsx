import React, { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";
import styles from "./CalculationForm.module.scss";

function CalculationForm() {
  const [rangeValue, setRangeValue] = useState("65");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <form className={styles.container}>
      <h3>Рассчитайте стоимость ремонта</h3>
      <div className={styles.settingBlock}>
        <p className={styles.description}>
          Площадь квартиры:
          <span>{rangeValue}м2</span>
        </p>
        <input
          type="range"
          name="range"
          min="1"
          max="150"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className={styles.slyder}
          id="squareRange"
        ></input>
      </div>
      <div className={styles.settingBlock}>
        <p className={styles.description}>Тип жилья:</p>
        <div className={styles.input_container}>
          <RadioInput
            text="Вторичное жилье"
            inputId="secondary"
            name="apartment"
          />
          <RadioInput text="Новостройка" inputId="new" name="apartment" />
          <RadioInput text="Офис" inputId="office" name="apartment" />
        </div>
      </div>
      <div className={styles.settingBlock}>
        <p className={styles.description}>Кол-во комнат:</p>
        <div className={styles.input_container_l}>
          <RadioInput text="1" inputId="room-1" name="room" />
          <RadioInput text="2" inputId="room-2" name="room" />
          <RadioInput text="3" inputId="room-3" name="room" />
          <RadioInput text="Студия" inputId="room" name="room" />
        </div>
      </div>
      <button onSubmit={handleSubmitForm} type="submit" className={styles.form_submit}>Отправить</button>
    </form>
  );
}

export default CalculationForm;
