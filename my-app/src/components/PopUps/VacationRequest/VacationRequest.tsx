import HistoryItem from "../../HistoryItem";
import Modal from "react-modal";
import Button from "../../Button";

import "../popUps.scss"
import "./vacationRequest.scss";
import ApproversTemplate from "../../../constants/ApproversTemplate";

interface IVacationRequest {
  showModal: boolean;
  dates: string;
  vacType: string;
  changeBtnType?: string;
  changeBtnText?: string;
  changeBtnHandler: () => void;
  cancelBtnType?: string;
  cancelBtnText?: string;
  cancelBtnHandler: () => void;
}

const VacationRequest = ({
  showModal,
  dates,
  vacType,
  cancelBtnType,
  cancelBtnText,
  cancelBtnHandler,
  changeBtnType,
  changeBtnText,
  changeBtnHandler,
}: IVacationRequest) => {
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
          dates={dates}
          reason={vacType === 'own' ? 'Reason type' : null}
          className="popUp__dates vacation__days"
        />
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
          <ApproversTemplate type={vacType}/>
        </div>
      </div>
      <div className="popUp__foot vacation__foot">
        <Button
          IClass={changeBtnType || "cancel"}
          text={changeBtnText || "change"}
          clickHandler={changeBtnHandler}
        />
        <Button
          IClass={cancelBtnType || "submit"}
          text={cancelBtnText || "close"}
          clickHandler={cancelBtnHandler}
        />
      </div>
    </Modal>
  );
};

export default VacationRequest;
