import { useEffect, useState } from "react";

import VacationForm from "../VacationForm";
import PopConfirmation from "../PopUps/PopConfirmation";

import daysCount from "../../helpers/daysCount";
import formatDates from "../../helpers/formatDates";
import { areIntervalsOverlapping } from "date-fns";

import confirmationInfo from "../../constants/confirmationInfo";

import Vacation from "../../interfaces/vacation";

import "./formBlock.scss";

interface Props {
  decreaseDays: (arg: number) => void;
  setVacation: (arg: Vacation) => void;
  vacations: Vacation[];
}

const FormBlock = ({ decreaseDays, setVacation, vacations }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [vacType, setVacType] = useState("vacation");
  const [comment, setComment] = useState("");
  const [warning, setWarning] =
    useState<keyof typeof confirmationInfo.warnings>("tooEarly");
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const getModalMessage = () => {
    if (
      vacations.some((el) =>
        areIntervalsOverlapping(
          { start: startDate, end: endDate },
          { start: el.startDate, end: el.endDate },
          { inclusive: true }
        )
      )
    ) {
      return "alreadyCreated";
    }
    if (daysCount(startDate, endDate) > 14) {
      return "weekLimit";
    }
    if (
      daysCount(startDate, endDate) < 3 &&
      startDate.getDay() > 5 &&
      endDate.getDay() < 1
    ) {
      return "onlyHolidays";
    }
    if (daysCount(Date.now(), startDate) < 14) {
      return "tooEarly";
    }
    return "noWarnings";
  };

  useEffect(() => {
    if (startDate > endDate) {
      setEndDate(startDate);
    }
  }, [startDate, endDate]);

  const [cancelBtnText, submitBtnText] = confirmationInfo.buttons[warning].text;

  const Handlers = [
    () => {
      if (vacType === "vacation") {
        decreaseDays(daysCount(startDate, endDate));
      }
      openModal();
      const creationDate = new Date();
      setVacation({ startDate, endDate, creationDate, comment, vacType });
    },
    openModal,
  ];
  const [cancelBtnHandler, submitBtnHandler] =
    confirmationInfo.buttons[warning].order === "reverse"
      ? Handlers
      : Handlers.reverse();

  return (
    <div className="form__wrapper wrapper">
      <div className={`form__back ${vacType}`} />
      <VacationForm
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        vacType={vacType}
        setVacType={setVacType}
        setComment={setComment}
        setWarning={setWarning}
        getModalMessage={getModalMessage}
        openModal={openModal}
      />
      <PopConfirmation
        showModal={isShowModal}
        warning={confirmationInfo.warnings[warning]}
        info={confirmationInfo.info[warning]}
        dates={formatDates({ startDate, endDate })}
        type={vacType}
        cancelBtnText={cancelBtnText}
        cancelBtnHandler={cancelBtnHandler}
        submitBtnText={submitBtnText}
        submitBtnHandler={submitBtnHandler}
      />
    </div>
  );
};

export default FormBlock;
