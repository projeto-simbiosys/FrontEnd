import getDate from "../utils/getDate";

export default function reportInfosToUpdateAdapter(reportInfos, statusReport) {
  const userId = JSON.parse(localStorage.getItem("user"))[2];
  console.log(userId);

  return {
    aberto: statusReport === "open",
    dataAtualizacao: getDate(),
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
        reportInfos.professionalCourses,
      totalPessoasCursosProfissionalizantesVirtuais: 0,
    },
    usuario: {
      id: userId,
    },
  };
}
