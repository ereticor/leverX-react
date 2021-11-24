import dateUnits from "../constants/dateUnits";

const daysCount = (startDate: Date | number, endDate: Date | number): number =>
  Math.round(Math.abs(+endDate - +startDate) / dateUnits.day) + 1;

export default daysCount;
