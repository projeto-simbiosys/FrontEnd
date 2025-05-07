import capitalizeWords from "../utils/capitalizeWords";
import { formatDate } from "../utils/formatDate";

export default function reportsListAdapter(reports) {
  console.log("reports", reports);

  if (!reports) return null;
  const monthsOrdened = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const reportsList = reports?.map(report => {
    const monthFormatted = report.month.toLowerCase();
    const statusFormatted = capitalizeWords(report.status);

    return {
      id: report.id,
      month: capitalizeWords(monthFormatted),
      year: report.year,
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
