import { IUseCasePointsECF, UseCasePointsECF } from "./UseCasePointsECF";
import { IUseCasePointsTCF, UseCasePointsTCF } from "./UseCasePointsTCF";
import { IUseCasePointsUAW, UseCasePointsUAW } from "./UseCasePointsUAW";
import { IUseCasePointsUUCP, UseCasePointsUUCP } from "./UseCasePointsUUCP";

export interface IUseCasePoint {
  nameProject?: string | null | undefined;
  createdProject?: Date | null  | undefined;
  updatedProject?: Date | null  | undefined;
  uucp: IUseCasePointsUUCP;
  tcf: IUseCasePointsTCF;
  uaw: IUseCasePointsUAW;
  ecf: IUseCasePointsECF;
  ucp: number;
  uid?: string;
  pid?: string;
}

export class UseCasePoint implements IUseCasePoint {
  nameProject: string | null | undefined;
  createdProject: Date | null  | undefined;
  updatedProject: Date | null  | undefined;

  uucp: UseCasePointsUUCP;
  tcf: UseCasePointsTCF;
  uaw: UseCasePointsUAW;
  ecf: UseCasePointsECF;
  ucp: number;
  uid?: string;
  pid?: string;

  constructor({
    nameProject,
    createdProject,
    updatedProject,
    uucp,
    tcf,
    uaw,
    ecf,
    ucp,
    uid,
    pid,
  }: IUseCasePoint) {
    this.nameProject = nameProject;
    this.createdProject = createdProject;
    this.updatedProject = updatedProject;
    this.uucp = uucp;
    this.tcf = tcf;
    this.uaw = uaw;
    this.ecf = ecf;
    this.ucp = ucp;
    this.uid = uid;
    this.pid = pid;
  }
}
