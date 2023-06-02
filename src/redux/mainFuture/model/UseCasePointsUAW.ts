export interface IUseCasePointsUAW {
  simple: number;
  average: number;
  complex: number;
  uaw?: number;
}
export class UseCasePointsUAW implements IUseCasePointsUAW{
    simple: number;
    average: number;
    complex: number;
    uaw?: number;
  
    constructor({
      simple,
      average,
      complex,
      uaw,
    }: {
      simple: number;
      average: number;
      complex: number;
      uaw: number;
    }) {
      this.simple = simple;
      this.average = average;
      this.complex = complex;
      this.uaw = uaw;
    }
  }
  