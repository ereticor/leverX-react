import Button from "../Button";
import DateInput from "../DateInput";

import "./vacationForm.scss";

import ownImg from "../../assets/images/formImg/own.svg";
import { useState } from "react";

const explanation = 
  `The days calculated here are calendar days: 
  Calendar days = Work days + Weekends 
  Number of days can be adjusted by Personnel Officer (Katsiaryna Barysik) in accordance with 
  the current legislation.
  `;

const VacationForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  return (
    <div className="form__wrapper wrapper">
      <img src={ownImg} alt="" className="form__back" />
      <form className="form">
        <h2 className="form__head heading">New Request</h2>
        <label className="form__select__wrapper">
        <select className="form__select">
          <option value="1" className="form__option">
            Vacation leave
          </option>
          <option value="2" className="form__option">
            Sick leave
          </option>
          <option value="3" className="form__option">
            Own expense leave
          </option>
        </select>
        </label>
        <div className="form__dates">
          <DateInput date={startDate} minDate={new Date()} setDate={setStartDate} text={"Start Date"}/>
          <DateInput date={endDate} minDate={new Date()} setDate={setEndDate} text={"End Date"}/>
          <div className="dates__wrapper">
            Day(s) <span data-title={explanation} className="dates__explanation">?</span>
            <label className="dates__count">
              <input type="number" />
            </label>
          </div>
        </div>
        <div className="form__comment__wrapper">
          <h3 className="comment__head">Comment</h3>
          <textarea className="comment__input"></textarea>
        </div>
        <div className="form__submit">
          <Button Itype="submit" text="Submit" />
          <p className="submit__info">
            Have questions? <a className="submit__link" href="https://youtu.be/dQw4w9WgXcQ">Read FAQ</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VacationForm;
