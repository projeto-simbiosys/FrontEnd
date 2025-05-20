import { reportSchema } from "./schema";

describe("reportSchema", () => {
  it("valida dados corretos", async () => {
    const validData = {
      socialAssistance: 1,
      professionalCoursesInsideOrg: 2,
      documents: 3,
      treatment: 0,
      PTR: 0,
      publicPolicies: 0,
      service: 1,
      socioEducationalActivities: 0,
      groupActivities: 2,
      outsideActivities: 1,
      lectures: 0,
      monitoredVisit: 0,
      courses: 0,
      trainingCourses: 1,
      professionalCourses: 1,
      feeding: 1,
      basicFood: 0,
      kitsHygiene: 2,
    };

    await expect(reportSchema.validate(validData)).resolves.toBeTruthy();
  });

  it("falha se algum campo estiver ausente", async () => {
    const invalidData = {
      socialAssistance: 1,
      // falta 'documents'
      professionalCoursesInsideOrg: 2,
    };

    await expect(reportSchema.validate(invalidData)).rejects.toThrow();
  });

  it("falha se algum campo for negativo", async () => {
    const invalidData = {
      socialAssistance: -1,
      professionalCoursesInsideOrg: 0,
      documents: 1,
      treatment: 1,
      PTR: 0,
      publicPolicies: 0,
      service: 0,
      socioEducationalActivities: 0,
      groupActivities: 0,
      outsideActivities: 0,
      lectures: 0,
      monitoredVisit: 0,
      courses: 0,
      trainingCourses: 0,
      professionalCourses: 0,
      feeding: 0,
      basicFood: 0,
      kitsHygiene: 0,
    };

    await expect(reportSchema.validate(invalidData)).rejects.toThrow(
      /must be greater than or equal to 0/
    );
  });
});
