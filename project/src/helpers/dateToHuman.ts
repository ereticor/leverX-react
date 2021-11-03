export default function dateToHuman(stamp: number) {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(stamp);
}
