import daysCount from "./daysCount";
import dateToHuman from "./dateToHuman";

interface IFormatDates {
  startDate: Date;
  endDate: Date;
}

export default function formatDates({ startDate, endDate }: IFormatDates) {
  return `${dateToHuman(startDate)} - ${dateToHuman(endDate)} (${daysCount(
    startDate,
    endDate
  )} days)`;
}
