import * as yup from "yup";

export const reportSchema = yup
.object({
  socialAssistance: yup.number().min(0).required(),
  professionalCoursesInsideOrg: yup.number().min(0).required(),
  documents: yup.number().min(0).required(),
  treatment: yup.number().min(0).required(),
  PTR: yup.number().min(0).required(),
  publicPolicies: yup.number().min(0).required(),
  service: yup.number().min(0).required(),
  socioEducationalActivities: yup.number().min(0).required(),
  groupActivities: yup.number().min(0).required(),
  outsideActivities: yup.number().min(0).required(),
  lectures: yup.number().min(0).required(),
  monitoredVisit: yup.number().min(0).required(),
  courses: yup.number().min(0).required(),
  trainingCourses: yup.number().min(0).required(),
  professionalCourses: yup.number().min(0).required(),
  feeding: yup.number().min(0).required(),
  basicFood: yup.number().min(0).required(),
  kitsHygiene: yup.number().min(0).required(),
});
