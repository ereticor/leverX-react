import HistoryItem from "../HistoryItem";

import "./leaveHistory.scss";

import Vacation from "../../interfaces/vacation";
import formatDates from "../../helpers/formatDates";

interface Props {
  vacations: Vacation[];
}

interface VacatoinsSorted {
  [key: string]: Vacation[];
}

const LeaveHistory = ({ vacations }: Props) => {
  const vacationSorted = vacations.reduce<VacatoinsSorted>((result, item) => {
    const year = new Date(item.endDate).getFullYear();
    if (result[`${year}`]) {
      result[`${year}`].push(item);
    } else {
      result[`${year}`] = [item];
    }
    return result;
  }, {});

  if (!vacations.length) {
    return (
      <div className="history__wrapper wrapper">
        <h2 className="history__head heading">My Leave Requests</h2>
        <div className="history__empty__wrapper">
          <div className="empty__back"></div>
          <h3 className="empty__head">No vacation requests yet</h3>
          <p className="empty__text">
            As soon as you create your first request, you can find it here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="history__wrapper wrapper">
      <h2 className="history__head heading">My Leave Requests</h2>
      <div className="list__wrapper">
        {Object.keys(vacationSorted).sort( (f, s) => +s - +f).map((key, index) => (
          <ul
            className="history__list"
            data-year={key}
            key={`history list: ${key}`}
          >
            {vacationSorted[key]
              .sort((f, s) => +f.creationDate - +s.creationDate)
              .map((item, index) => {
                const {startDate, endDate, creationDate, vacType} = item
                return (
                  <li className="history__item__wrapper" key={`history item: ${creationDate}, ${index}`}>
                    <HistoryItem type={vacType} dates={formatDates({startDate, endDate})} creationDate={creationDate} />
                  </li>
                );
              })}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LeaveHistory;
