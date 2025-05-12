import getDate from "../utils/getDate";

export default function reportInfosToCreate(
  year,
  month,
  reportInfos,
  statusReport
) {
  const monthOrder = {
    Janeiro: "01",
    Fevereiro: "02",
    Março: "03",
    Abril: "04",
    Maio: "05",
    Junho: "06",
    Julho: "07",
    Agosto: "08",
    Setembro: "09",
    Outubro: 10,
    Novembro: 11,
    Dezembro: 12,
  };

  const userId = JSON.parse(localStorage.getItem("user"))[2];

  return {
    mesAno: `${monthOrder[month]}/${year}`,
    dataAtualizacao: getDate(),
    aberto: statusReport === "open",
    encaminhamento: {
      encBeneficioPrestacaoContinuada: 0,
      encAposentadoria: 0,
      encAssistenciaSocial: reportInfos.socialAssistance,
      encCursosProfissionalizantesForaOrganizacao: 0,
      encCursosProfissionalizantesDentroOrganizacao:
        reportInfos.professionalCoursesInsideOrg,
      encEducacaoNaoFormal: 0,
      encEducacaoFormal: 0,
      encDocumentos: reportInfos.documents,
      encTrabalho: 0,
      encGeracaoRenda: 0,
      encSaude: 0,
      encTratamentoDrogas: reportInfos.treatment,
      encProgramasTransferenciaRenda: reportInfos.PTR,
      encPoliticasPublicas: reportInfos.publicPolicies,
    },
    outrosNumeros: {
      alimentacao: reportInfos.feeding,
      numeroDePessoasPresencial: 0,
      cestasBasicasDoadas: reportInfos.basicFood,
      kitsHigieneDoados: reportInfos.kitsHygiene,
      totalParticipantesAtividadeDistancia: 0,
      totalParticipantesAtividadePresencial: 0,
    },
    acoesRealizadas: {
      totalAtividadesGrupoVirtual: 0,
      totalAtividadesCulturaisExternas: reportInfos.outsideActivities,
      totalAtividadesCulturaisVirtuais: 0,
      totalPalestrasPresenciais: reportInfos.lectures,
      totalPalestrasVirtuais: 0,
      totalVisitasFamiliaresPresenciais: 0,
      totalVisitasFamiliaresVirtuais: 0,
      totalVisitasMonitoradasPresenciais: reportInfos.monitoredVisit,
      totalVisitasMonitoradasVirtuais: 0,
      totalCursosMinistradosPresenciais: reportInfos.courses,
      totalCursosMinistradosVirtuais: 0,
      totalPessoasCursosCapacitacaoPresenciais: reportInfos.trainingCourses,
      totalPessoasCursosCapacitacaoVirtuais: 0,
      totalPessoasCursosProfissionalizantesPresenciais:
        reportInfos.ProfessionalCourses,
      totalPessoasCursosProfissionalizantesVirtuais: 0,
    },
    usuario: {
      id: userId,
    },
  };
}
