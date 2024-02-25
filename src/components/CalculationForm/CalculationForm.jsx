import React, { useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";

import { setRangeValue, setDataInput } from "../../store/formSlice";
import { hiddenOverlay, setType, showOverlay } from "../../store/modalSlice";
import RadioInput from "../RadioInput/RadioInput";
import { useFormValidation } from "../utils/useFormValidation";

import styles from "./CalculationForm.module.scss";

function CalculationForm() {
  const dispatch = useDispatch();
  const { rangeValue, roomValue, qtyRoomValue, dataInput } = useSelector(
    (state) => state.form
  );
  const { isOverlay, type } = useSelector((state) => state.modal);
  const { errors, values, isValid, handleChange } = useFormValidation();

  useEffect(() => {
    dispatch(
      setDataInput({
        rangeValue: rangeValue,
        roomValue: roomValue,
        qtyRoomValue: qtyRoomValue,
      })
    );
    dispatch(setType("callbackForm"));
  }, [rangeValue, roomValue, qtyRoomValue]);

  const handlePreSubmit = () => {
    dispatch(showOverlay());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = {
      rangeValue: dataInput.rangeValue,
      roomValue: dataInput.roomValue,
      qtyRoomValue: dataInput.qtyRoomValue,
      phone: values.phone,
    };
    console.log(data);

    const response = () => {
      return fetch("calculationForm.php", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => {
        if (data.status === 200) {
          alert("Ваша заявка успешно отправлена");
        } else {
          alert("Что-то пошло не так :-(");
        }
        dispatch(hiddenOverlay());
      });
    };
    response();
  };

  return (
    <>
      <form className={styles.form} /* onSubmit={handleSubmitForm} */>
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
            onChange={(e) => dispatch(setRangeValue(e.target.value))}
            className={styles.slyder}
            id="squareRange"
          ></input>
        </div>
        <div className={styles.settingBlock}>
          <p className={styles.description}>Тип жилья:</p>
          <div className={styles.input_container}>
            <RadioInput
              text="Вторичное жилье"
              inputId="Вторичное жилье"
              name="apartment"
            />
            <RadioInput
              text="Новостройка"
              inputId="Новостройка"
              name="apartment"
            />
            <RadioInput text="Офис" inputId="Офис" name="apartment" />
          </div>
        </div>
        <div className={styles.settingBlock}>
          <p className={styles.description}>Кол-во комнат:</p>
          <div className={styles.input_container_l}>
            <RadioInput text="1" inputId="1" name="room" />
            <RadioInput text="2" inputId="2" name="room" />
            <RadioInput text="3" inputId="3" name="room" />
            <RadioInput text="Студия" inputId="Студия" name="room" />
          </div>
        </div>
        <button
          type="button"
          className={styles.form_submit}
          onClick={handlePreSubmit}
          disabled={type === ''}
        >
          Отправить
        </button>
      </form>
      <form
        className={
          isOverlay && type === "callbackForm"
            ? `${styles.callbackPhone} ${styles.callbackPhone_active}`
            : `${styles.callbackPhone}`
        }
        onSubmit={handleSubmitForm}
      >
        <label for="phone">Телефон для связи</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 20,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
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
          <button type="submit" className={styles.button} disabled={!isValid}>
            Отправить
          </button>
        </div>
        <span className={styles.error}>{errors.phone}</span>
      </form>
      <div
        onClick={() => dispatch(hiddenOverlay())}
        className={
          isOverlay && type === "callbackForm"
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
    </>
  );
}

export default CalculationForm;
