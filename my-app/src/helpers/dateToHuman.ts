export default function dateToHuman(stamp: number | Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(stamp);
}
