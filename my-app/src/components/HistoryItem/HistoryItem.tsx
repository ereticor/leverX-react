import dateToHuman from "../../helpers/dateToHuman";

import "./historyItem.scss";

interface IHistoryItem {
  isModal?: boolean;
  isHistory?: boolean;
  type: string;
  dates?: string | null;
  creationDate?: Date;
  reason?: string | null;
  className?: string;
}

const HistoryItem = ({
  isModal,
  isHistory,
  className,
  type,
  dates,
  creationDate,
  reason,
}: IHistoryItem) => {
  return (
    <div
      className={`history__item ${className || ""} ${
        isModal || isHistory ? "" : "animation"
      }`}
    >
      <div className={`item__type ${type}`} />
      <div className="item__content">
        <div className="history__duration">
          <h4 className="duration__head">
            {`${isModal ? "" : "Vacation:"} ${
              dates || "16 Sep 2018 - 16 Sep 2018 (4 days)"
            }`}
          </h4>
          {isModal || isHistory ? null : <span>&gt;</span>}
        </div>
        {isModal ? null : (
          <>
            <p className="duration__posted">
              Created: {dateToHuman(creationDate || Date.now())}
            </p>
            {reason ? (
              <p className="duration__posted">Reason: {reason}</p>
            ) : null}
            <p className="duration__status approve">Approved</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryItem;
