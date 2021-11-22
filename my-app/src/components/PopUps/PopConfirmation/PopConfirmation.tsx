import HistoryItem from "../../HistoryItem";
import Modal from "react-modal";
import Button from "../../Button";

import "./popConfirmation.scss";

interface IPopConfirmation {
  showModal: boolean;
  warning: string | null;
  info: string | null;
  dates: string;
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
      className="confirm"
      overlayClassName="confirm__wrapper"
    >
      <h4 className="confirm__head">Request a confirmation</h4>
      <div className="confirm__body">
        {warning ? <p className="confirm__warning">{warning}</p> : null}
        {info ? <p className="confirm__info">{info}</p> : null}
        <HistoryItem
          isModal={true}
          type={"own"}
          dates={dates}
          className="confirm__dates"
        />
      </div>
      <div className="confirm__foot">
        <Button
          Itype={cancelBtnType || "cancel"}
          text={cancelBtnText || "cancel"}
          clickHandler={cancelBtnHandler}
        />
        {submitBtnText ? (
          <Button
            Itype={submitBtnType || "submit"}
            text={submitBtnText || "confirm"}
            clickHandler={submitBtnHandler}
          />
        ) : null}
      </div>
    </Modal>
  );
};

export default PopConfirmation;
