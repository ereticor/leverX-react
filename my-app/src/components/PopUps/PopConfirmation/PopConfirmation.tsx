import HistoryItem from "../../HistoryItem";
import Modal from "react-modal";
import Button from "../../Button";

import "../popUps.scss"
import "./popConfirmation.scss";

interface IPopConfirmation {
  showModal: boolean;
  warning: string | null;
  info: string | null;
  dates: string;
  type: string;
  cancelBtnType?: string;
  cancelBtnText?: string | null;
  cancelBtnHandler: () => void;
  submitBtnType?: string;
  submitBtnText?: string | null;
  submitBtnHandler: () => void;
}

const PopConfirmation = ({
  showModal,
  warning,
  info,
  dates,
  type,
  cancelBtnType,
  cancelBtnText,
  cancelBtnHandler,
  submitBtnType,
  submitBtnText,
  submitBtnHandler,
}: IPopConfirmation) => {
  return (
    <Modal
      isOpen={showModal}
      contentLabel={"confirm modal"}
      appElement={document.getElementsByClassName("App")}
      className="pop__confirm popUp"
      overlayClassName="pop__confirm__wrapper popUp__wrapper"
    >
      <h4 className="popUp__head confirm__head">Request a confirmation</h4>
      <div className="popUp__body confirm__body">
        {warning ? <p className="confirm__warning">{warning}</p> : null}
        {info ? <p className="confirm__info">{info}</p> : null}
        <HistoryItem
          isModal={true}
          type={type}
          dates={dates}
          className="confirm__dates"
        />
      </div>
      <div className="popUp__foot confirm__foot">
        <Button
          IClass={cancelBtnType || "cancel"}
          text={cancelBtnText || "cancel"}
          clickHandler={cancelBtnHandler}
        />
        {submitBtnText ? (
          <Button
            IClass={submitBtnType || "submit"}
            text={submitBtnText || "confirm"}
            clickHandler={submitBtnHandler}
          />
        ) : null}
      </div>
    </Modal>
  );
};

export default PopConfirmation;
