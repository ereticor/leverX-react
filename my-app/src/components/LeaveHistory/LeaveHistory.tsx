import "./leaveHistory.scss";

const LeaveHistory = () => {
  return (
    <div className="history__wrapper wrapper">
      <h2 className="history__head heading">My Leave Requests</h2>
      <div className="list__wrapper">
        <h3 className="list__head">2019 year</h3>
        <ul className="history__list">
          <li className="history__item">
            <div className="item__type own" />
            <div className="item__content">
              <div className="history__duration">
                <h4 className="duration__head">
                  Vacation: {`16 Sep 2018`} - {`16 Sep 2018`} (4 days)
                </h4>
                <span>&gt;</span>
              </div>
              <p className="duration__posted">Created: {`16 Sep 2018`}</p>
              <p className="duration__status approve">Approved</p>
            </div>
          </li>
          <li className="history__item">
            <div className="item__type vacation" />
            <div className="item__content">
              <div className="history__duration">
                <h4 className="duration__head">
                  Vacation: {`16 Sep 2018`} - {`16 Sep 2018`} (4 days)
                </h4>
                <span>&gt;</span>
              </div>
              <p className="duration__posted">Created: {`16 Sep 2018`}</p>
              <p className="duration__status approve">Approved</p>
            </div>
          </li>
          <li className="history__item">
            <div className="item__type sick" />
            <div className="item__content">
              <div className="history__duration">
                <h4 className="duration__head">
                  Vacation: {`16 Sep 2018`} - {`16 Sep 2018`} (4 days)
                </h4>
                <span>&gt;</span>
              </div>
              <p className="duration__posted">Created: {`16 Sep 2018`}</p>
              <p className="duration__status approve">Approved</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeaveHistory;
