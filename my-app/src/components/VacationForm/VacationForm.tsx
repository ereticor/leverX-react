import { useEffect, useState } from "react";
// import {createPortal} from "react-dom";

import Button from "../Button";
import DateInput from "../DateInput";
import PopExplanation from "../PopUps/PopExplanation";
import PopConfirmation from "../PopUps/PopConfirmation";

import { sickWarning } from "../../constants/warnings";
import { daysCountExplanation } from "../../constants/explanations";
import daysCount from "../../helpers/daysCount";

import "./vacationForm.scss";

const VacationForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [vacType, setVacType] = useState("vacation");
  const [comment, setComment] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const getModalMessage = () => {
    if (daysCount(startDate, endDate) > 14) {
      return 'weekLimit'
    }
    if (daysCount(startDate, endDate) < 3 && startDate.getDay() > 5 && endDate.getDay() > 5) {
      return 'onlyHolidays'
    }
    if (!!Math.ceil(Math.random() - 0.5)) {
      return 'alreadyCreated'
    }
    if (daysCount(Date.now(), startDate) < 14) {
      return 'tooEarly'
    }
    return 'noWarnings'
  }

  useEffect(() => {
    if (startDate > endDate) {
      setEndDate(startDate);
    }
    if (daysCount(Date.now(), startDate) > 14) {
      
    }
  }, [startDate, endDate]);

  return (
    <div className="form__wrapper wrapper">
      <div className={`form__back ${vacType}`} />
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(startDate, endDate, vacType, comment);
        }}
      >
        <h2 className="form__head heading">New Request</h2>
        <label className="form__select__wrapper">
          <select
            className="form__select"
            onChange={(e) => setVacType(e.target.value)}
          >
            <option value="vacation" className="form__option">
              Vacation leave
            </option>
            <option value="own" className="form__option">
              Own expense leave
            </option>
            <option value="sick" className="form__option">
              Sick leave
            </option>
          </select>
        </label>
        {vacType === "sick" ? (
          <p className="form__warning">
            <span>Important: </span> {sickWarning}
          </p>
        ) : null}
        <div className="form__dates">
          <DateInput
            date={startDate}
            minDate={new Date()}
            setDate={setStartDate}
            text={"Start Date"}
          />
          <DateInput
            date={endDate}
            minDate={startDate}
            setDate={setEndDate}
            text={vacType === "sick" ? "Expected End Date" : "End Date"}
          />
          {vacType === "vacation" ? (
            <div className="dates__wrapper">
              Day(s){" "}
              <span className="dates__explanation">
                <PopExplanation content={daysCountExplanation} />
              </span>
              <label className="dates__count">
                <input
                  type="number"
                  disabled
                  value={daysCount(startDate, endDate)}
                />
              </label>
            </div>
          ) : null}
        </div>
        <div className="form__comment__wrapper">
          <h3 className="comment__head">Comment</h3>
          <textarea
            className="comment__input"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form__submit">
          <Button Itype="submit" text="Submit" clickHandler={openModal} />
          <p className="submit__info">
            Have questions?{" "}
            <a className="submit__link" href="https://youtu.be/dQw4w9WgXcQ">
              Read FAQ
            </a>
          </p>
        </div>
        <PopConfirmation
          showModal={isShowModal}
          warning={getModalMessage()}
          cancelBtnHandler={openModal}
          submitBtnHandler={openModal}
        />
      </form>
    </div>
  );
};

export default VacationForm;
