export interface IUseCasePointsUUCP {
  simple: number;
  average: number;
  complex: number;
  uucp?: number;
}

export class UseCasePointsUUCP implements IUseCasePointsUUCP {
  simple: number;
  average: number;
  complex: number;
  uucp?: number;

  constructor({ simple, average, complex, uucp }: IUseCasePointsUUCP) {
    this.simple = simple;
    this.average = average;
    this.complex = complex;
    this.uucp = uucp;
  }
}
