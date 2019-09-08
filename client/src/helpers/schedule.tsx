import { ClinicSummary } from "components/clinics/types";

// Returns the number of spots taken
export const getDatesByClass = (clinic_summary : ClinicSummary[]) => {
  const datesByClass : any = [];

  for (const clinic of clinic_summary) {
    const i = datesByClass.findIndex((e : any) => e.class === clinic.color);
    if (i >= 0) {
      datesByClass[i].dates.push(clinic.date);
    } else {
      const firstOfClass = {
        class: clinic.color,
        dates: [clinic.date]
      }
      datesByClass.push(firstOfClass);
    }
  }
  return datesByClass;
};
