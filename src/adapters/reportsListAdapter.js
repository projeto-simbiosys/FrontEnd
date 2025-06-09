import capitalizeWords from "../utils/capitalizeWords";
import { formatDate } from "../utils/formatDate";

export default function reportsListAdapter(reports) {
  if (!reports) return [];
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

  const months = {
    "01": "janeiro",
    "02": "fevereiro",
    "03": "março",
    "04": "abril",
    "05": "maio",
    "06": "junho",
    "07": "julho",
    "08": "agosto",
    "09": "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
  };

  const reportsList = reports?.map(report => {
    const monthYear = report.mesAno.split("/");
    const monthFormatted = months[monthYear[0]];
    const statusFormatted = report.aberto ? "Aberto" : "Fechado";

    const nameUser = capitalizeWords(report.usuario.nome);
    const lastNameUser = capitalizeWords(report.usuario.sobrenome);

    return {
      id: report.id,
      month: capitalizeWords(monthFormatted),
      year: monthYear[1],
      monthYear: report.mesAno,
      lastUpdate: formatDate(report.dataAtualizacao),
      lastPersonToUpdate: `${nameUser} ${lastNameUser}`,
      status: statusFormatted,
      isClosed: !report.aberto,
      url: "testando.url",
    };
  });

  return reportsList?.sort(
    (current, next) =>
      monthsOrdened.indexOf(current?.month) - monthsOrdened.indexOf(next?.month)
  );
}
