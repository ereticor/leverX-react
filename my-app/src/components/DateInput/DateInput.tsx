import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./dateInput.scss";

interface IDateInput {
  date: Date;
  minDate: Date;
  setDate(date: Date): void;
  text: string;
}

const DateInput = ({ setDate, date, minDate, text }: IDateInput) => {
  return (
    <div className="dates__wrapper">
      {text} <span>(inclusive)</span>
      <label>
        <DatePicker
          minDate={minDate}
          selected={date}
          onChange={(date) => {
            {/* @ts-ignore */}
            setDate(date);
          }}
          dateFormat="dd MMM yyyy"
        />
      </label>
    </div>
  );
};

export default DateInput;
