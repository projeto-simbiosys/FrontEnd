import capitalizeWords from "../utils/capitalizeWords";
import { formatDate } from "../utils/formatDate";

export default function reportsListAdapter(reports) {
  if (!reports) return null;
  const monthsOrdened = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const reportsList = reports?.map(report => {
    const monthFormatted = report.month.toLowerCase().substring(0, 3);
    const statusFormatted = capitalizeWords(report.status);

    return {
      id: report.id,
      month: capitalizeWords(monthFormatted),
      lastUpdate: formatDate(report.lastUpdate),
      lastPersonToUpdate: capitalizeWords(report.lastPersonToUpdate),
      status: statusFormatted,
      isClosed: statusFormatted === "Fechado",
      url: report.url,
    };
  });

  return reportsList?.sort(
    (current, next) =>
      monthsOrdened.indexOf(current?.month) - monthsOrdened.indexOf(next?.month)
  );
}
