import HistoryItem from '../HistoryItem'

import "./leaveHistory.scss";

const LeaveHistory = () => {

  const arr = [2019,2018]

  if (!arr.length) {
    return (
      <div className="history__wrapper wrapper">
        <h2 className="history__head heading">My Leave Requests</h2>
        <div className="history__empty__wrapper">
          <div className="empty__back"></div>
          <h3 className="empty__head">No vacation requests yet</h3>
          <p className="empty__text">As soon as you create your first request, you can find it here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="history__wrapper wrapper">
      <h2 className="history__head heading">My Leave Requests</h2>
      <div className="list__wrapper">
        {/* <h3 className="list__head">2019 Year</h3> */}
        {arr.map( (key, index) => (
          <ul className="history__list" data-year={key} key={`history list: ${index}`}>
          <li className="history__item__wrapper">
            <HistoryItem type={'own'}/>
          </li>
          <li className="history__item__wrapper">
            <HistoryItem type={'sick'}/>
          </li>
          <li className="history__item__wrapper">
            <HistoryItem type={'vacation'}/>
          </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LeaveHistory;
