import HistoryItem from "../../HistoryItem";
import Modal from "react-modal";
import Button from "../../Button";

import "../popUps.scss";
import "./vacationRequest.scss";
import ApproversTemplate from "../../../constants/ApproversTemplate";
import { useEffect, useState } from "react";
import VacationForm from "../../VacationForm";
import Vacation from "../../../interfaces/vacation";
import formatDates from "../../../helpers/formatDates";

interface IVacationRequest {
  vacations: Vacation[];
  // changeVacation: ({oldItem, newItem}: {oldItem: Vacation, newItem: Vacation}) => void;
  setVacation: (vacation: Vacation) => void;
  deleteVacation: (vacation: Vacation) => void;
  showModal: boolean;
  openModal: () => void;
  currentVacation: Vacation;
  setCurrentVacation: (vacation: Vacation | null) => void;
  changeBtnType?: string;
  changeBtnText?: string;
  cancelBtnType?: string;
  cancelBtnText?: string;
}

const VacationRequest = ({
  vacations,
  // changeVacation,
  setVacation,
  deleteVacation,
  showModal,
  openModal,
  currentVacation,
  setCurrentVacation,
  cancelBtnType,
  cancelBtnText,
  changeBtnType,
  changeBtnText,
}: IVacationRequest) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [startDate, setStartDate] = useState(currentVacation.startDate);
  const [endDate, setEndDate] = useState(currentVacation.endDate);
  // const [vacType, setVacType] = useState(currentVacation.vacType);
  const [comment, setComment] = useState(currentVacation.comment);

  const { vacType, id } = currentVacation;

  const changeVacation = (oldItem: Vacation) => {
    deleteVacation(oldItem);
    return function(newItem: Vacation) {
      setVacation(newItem)
    }
  }

  const deleteBtnHandler = () => {
    deleteVacation(currentVacation)
    setCurrentVacation(null);
    openModal()
  }

  const cancelBtnHandler = () => {
    openModal();
  };
  const changeBtnHandler = () => {
    openForm()
  };

  const saveBtnHandler = () => {
    changeVacation(currentVacation)({startDate, endDate, creationDate: new Date(), comment, vacType: vacType, id: id})
    openForm();
  }

  const openForm = () => {
    setIsShowForm((prev) => !prev);
  };



  useEffect(() => {
    if (startDate > endDate) {
      setEndDate(startDate);
    }
  }, [startDate, endDate]);

  return (
    <Modal
      isOpen={showModal}
      contentLabel={"vacation info modal"}
      appElement={document.getElementsByClassName("App")}
      className="pop__vacation popUp"
      overlayClassName="pop__vacation__wrapper popUp__wrapper"
    >
      <h4 className="popUp__head vacation__head">Request for vacation</h4>
      <div className="popUp__body vacation__body">
        <HistoryItem
          isHistory={true}
          type={vacType}
          dates={formatDates({
            startDate: startDate,
            endDate: endDate,
          })}
          reason={vacType === "own" ? "Reason type" : null}
          className="popUp__dates vacation__days"
        />
        {isShowForm ? (
          <VacationForm
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            vacType={vacType}
            isLockedType={true}
            isFootClosed={false}
            setComment={setComment}
            openModal={openForm}
          />
        ) : (
          <div className="vacation__approvers__wrapper">
            {/* {assigned.map((el, index) => {
            return (
              <ul data-assignStep={el.assignStep}>
                {el.map((person, index) => {
                  <li>
                    <img src="" alt="avatar"></img>
                    <p>{person.name}</p>
                  </li>;
                })}
              </ul>
            );
          })} */}
            <ApproversTemplate type={vacType} />
          </div>
        )}
      </div>
      <div className="popUp__foot vacation__foot">
        {isShowForm
          ? <>
                    <Button
            IClass={changeBtnType || "cancel"}
            text={changeBtnText || "cancel"}
            clickHandler={openForm}
          />
          <Button
            IClass={cancelBtnType || "submit"}
            text={cancelBtnText || "save"}
            clickHandler={saveBtnHandler}
          /></>
          : <>        {vacType !== "vacation" ? (
            <Button
              IClass={"cancel"}
              text={vacType === "sick" ? "cancel request" : "decline request"}
              clickHandler={deleteBtnHandler}
            />
          ) : null}
          <Button
            IClass={changeBtnType || "cancel"}
            text={changeBtnText || "change"}
            clickHandler={changeBtnHandler}
          />
          <Button
            IClass={cancelBtnType || "submit"}
            text={cancelBtnText || "close"}
            clickHandler={cancelBtnHandler}
          /></>}
      </div>
    </Modal>
  );
};

export default VacationRequest;
