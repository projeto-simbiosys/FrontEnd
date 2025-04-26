export default function reportInfosAdapter(reportInfos) {
  const referrals = reportInfos.details.encaminhamento;
  const actions = reportInfos.details.acoesRealizadas;
  const othersNumbers = reportInfos.details.outrosNumeros;

  return {
    socialAssistance: referrals.encAssistenciaSocial,
    professionalCoursesInsideOrg:
      referrals.encCursosProfissionalizantesDentroOrganizacao,
    documents: referrals.encDocumentos,
    treatment: referrals.encTratamentoDrogas,
    PTR: referrals.encProgramasTransferenciaRenda,
    publicPolicies: referrals.encPoliticasPublicas,

    service: 0,
    socioEducationalActivities: 0,
    groupActivities: 0,
    outsideActivities: actions.totalAtividadesCulturaisExternas,
    lectures: actions.totalPalestrasPresenciais,
    monitoredVisit: actions.totalVisitasMonitoradasPresenciais,
    courses: actions.totalCursosMinistradosPresenciais,
    trainingCourses: actions.totalPessoasCursosCapacitacaoPresenciais,
    professionalCourses:
      actions.totalPessoasCursosProfissionalizantesPresenciais,

    feeding: othersNumbers.alimentacao,
    basicFood: othersNumbers.cestasBasicasDoadas,
    kitsHygiene: othersNumbers.kitsHigieneDoados,
  };
}
