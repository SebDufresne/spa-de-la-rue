import { getDatesByClass } from "./schedule";

const clinic_summary = [
  {
    date:'2019-01-02',
    color:'bg-warning'
  },
  {
    date:'2019-01-03',
    color:'bg-warning'
  }
];
const expectedResult = [{
  dates: ['2019-01-02', '2019-01-03'],
  class: 'bg-warning'
}];
describe("Shecule helper", () => {
  it("to receive an array", () => {
    expect(Array.isArray(getDatesByClass(clinic_summary))).toBe(true);
  });
  it("get Object of dates for given array of clinics", () => {
    expect(getDatesByClass(clinic_summary)).toMatchObject(expectedResult);  
  });
});
