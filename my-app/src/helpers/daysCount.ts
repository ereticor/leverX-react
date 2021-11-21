import dateUnits from "../constants/dateUnits";

interface IDaysCount {
  startDate: Date | number,
  endDate: Date | number,
}

const daysCount = ({startDate, endDate}: IDaysCount) => (Math.round( (+endDate - +startDate) / dateUnits.day ) + 1);

export default daysCount;