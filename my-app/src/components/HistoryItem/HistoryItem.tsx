import "./historyItem.scss";

interface IHistoryItem {
  isModal?: boolean;
  className?: string;
  type: string;
  dates?: string | null;
}

const HistoryItem = ({ isModal, className, type, dates }: IHistoryItem) => {
  return (
    <div className={`history__item ${className || ""}`}>
      <div className={`item__type ${type}`} />
      <div className="item__content">
        <div className="history__duration">
          <h4 className="duration__head">
            {`${isModal ? "" : "Vacation:"} ${
              dates || "16 Sep 2018 - 16 Sep 2018 (4 days)"
            }`}
          </h4>
          {isModal ? null : <span>&gt;</span>}
        </div>
        {isModal ? null : (
          <>
            <p className="duration__posted">Created: {`1 Sep 2018`}</p>
            <p className="duration__status approve">Approved</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryItem;
