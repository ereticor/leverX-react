import Button from "../Button";
import DateInput from "../DateInput";
import PopExplanation from "../PopUps/PopExplanation";
import daysCount from "../../helpers/daysCount";

import { sickWarning } from "../../constants/warnings";
import { daysCountExplanation } from "../../constants/explanations";
import confirmationInfo from "../../constants/confirmationInfo";

import "./vacationForm.scss";

interface IVacationForm {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  vacType: string;
  setVacType?: (type: string) => void;
  isLockedType?: boolean;
  setComment: (comment: string) => void;
  setWarning?: (warning: keyof typeof confirmationInfo.warnings) => void;
  getModalMessage?: () => keyof typeof confirmationInfo.warnings;
  openModal: () => void;
  isFootClosed?: boolean;
}

const VacationForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  vacType,
  setVacType,
  isLockedType,
  setComment,
  setWarning,
  getModalMessage,
  openModal,
  isFootClosed,
}: IVacationForm) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="form__head heading">New Request</h2>
      <label className="form__select__wrapper">
        <select
          disabled={isLockedType}
          className="form__select"
          onChange={(e) => {
            if (!isLockedType && setVacType) {
              setVacType(e.target.value);
            }
          }}
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
      {!isFootClosed ? (
        <div className="form__submit">
          <Button
            IClass="button"
            text="Submit"
            clickHandler={() => {
              if (setWarning && getModalMessage) {
                setWarning(getModalMessage());
              }
              openModal();
            }}
          />
          <p className="submit__info">
            Have questions?{" "}
            <a className="submit__link" href="https://youtu.be/dQw4w9WgXcQ">
              Read FAQ
            </a>
          </p>
        </div>
      ) : null}
    </form>
  );
};

export default VacationForm;
