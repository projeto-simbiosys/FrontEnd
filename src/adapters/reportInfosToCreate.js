export default function reportInfosToCreate(
  year,
  month,
  reportInfos,
  statusReport
) {
  const today = new Date();

  const dayToday = today.getDate();
  const monthToday = today.getMonth() + 1;
  const yearToday = today.getFullYear();

  return {
    year,
    month,
    lastUpdate: `${yearToday}-0${monthToday}-${dayToday}`,
    lastPersonToUpdate: "Matheus Castrinho :)",
    status: statusReport === "open" ? "aberto" : "fechado",
    url: "https://example.com/report/1",
    details: {
      encaminhamento: {
        id: 1,
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
        id: 1,
        alimentacao: reportInfos.feeding,
        numeroDePessoasPresencial: 0,
        cestasBasicasDoadas: reportInfos.basicFood,
        kitsHigieneDoados: reportInfos.kitsHygiene,
        totalParticipantesAtividadeDistancia: 0,
        totalParticipantesAtividadePresencial: 0,
      },
      acoesRealizadas: {
        id: 1,
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
    },
  };
}
