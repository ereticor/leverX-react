import Button from "../Button";

import "./vacationForm.scss";

import ownImg from "../../assets/images/formImg/own.svg";

const VacationForm = () => {
  return (
    <div className="form__wrapper wrapper">
      <img src={ownImg} alt="" className="form__back" />
      <form className="form">
        <h2 className="form__head heading">New Request</h2>
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
        <div className="form__dates">
          <div className="dates__wrapper">
            Start Date <span>(inclusive)</span>
            <label>
              <input type="date" min={`${Date.now()}`}/>
            </label>
          </div>
          <div className="dates__wrapper">
            End Date <span>(inclusive)</span>
            <label>
              <input type="date" min={`${Date.now()}`}/>
            </label>
          </div>
          <div className="dates__wrapper">
            Day(s) <span>?</span>
            <label>
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
          <p>
            Have questions? <a href="https://youtu.be/dQw4w9WgXcQ">Read FAQ</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VacationForm;
