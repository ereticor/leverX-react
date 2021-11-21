import HistoryItem from '../../HistoryItem'
import Modal from "react-modal";
import Button from "../../Button";

import confirmationInfo from "../../../constants/confirmationInfo";

import "./popConfirmation.scss";

interface IPopConfirmation {
  showModal: boolean,
  warning: keyof typeof confirmationInfo.warnings,
  cancelBtnType?: string,
  cancelBtnText?: string,
  cancelBtnHandler: () => void,
  submitBtnType?: string,
  submitBtnText?: string,
  submitBtnHandler: () => void,
}

const PopConfirmation = ({showModal, warning, cancelBtnType, cancelBtnText, cancelBtnHandler, submitBtnType, submitBtnText, submitBtnHandler}: IPopConfirmation) => {
  return (
    <Modal isOpen={showModal} contentLabel={"confirm modal"} appElement={document.getElementsByClassName('App')} className="confirm" overlayClassName="confirm__wrapper">
      <h4 className="confirm__head">Request a confirmation</h4>
      <div className="confirm__body">
        {/* {[confirmationInfo.warnings[warning], confirmationInfo.info[warning]].map( (warning, key) => {

        })} */}
        {confirmationInfo.warnings[warning] ? <p className="confirm__warning">{confirmationInfo.warnings[warning]}</p> : null}
        {confirmationInfo.info[warning] ? <p className="confirm__info">{confirmationInfo.info[warning]}</p> : null}
        {/* <p className="confirm__warning">{confirmationInfo.warnings.tooEarly}</p>
        <p className="confirm__info">{confirmationInfo.info.noWarnings}</p> */}
        <HistoryItem isModal={true} type={'own'} className="confirm__dates"/>
      </div>
      <div className="confirm__foot">
        <Button Itype={cancelBtnType || 'cancel'} text={cancelBtnText || 'cancel'} clickHandler={cancelBtnHandler}/>
        <Button Itype={submitBtnType || 'submit'} text={submitBtnText || 'confirm'} clickHandler={submitBtnHandler}/>
      </div>
    </Modal>
  );
};

export default PopConfirmation;
