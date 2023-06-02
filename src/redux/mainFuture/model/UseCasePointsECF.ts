export interface IUseCasePointsECF {
    e1: number; // FamiliarityWithDevelopmentProcessUsed
    e2: number; // ApplicationExperience
    e3: number; // Object-orientedExperienceOfTeam
    e4: number; // LeadAnalystCapability
    e5: number; // MotivationOfTheTeam
    e6: number; // StabilityOfRequirements
    e7: number; // Part-timeStaff
    e8: number; // DifficultProgrammingLanguage
    ecf?: number;
    ef?: number;
  }
  
  export class UseCasePointsECF implements IUseCasePointsECF {
    e1: number; // FamiliarityWithDevelopmentProcessUsed
    e2: number; // ApplicationExperience
    e3: number; // Object-orientedExperienceOfTeam
    e4: number; // LeadAnalystCapability
    e5: number; // MotivationOfTheTeam
    e6: number; // StabilityOfRequirements
    e7: number; // Part-timeStaff
    e8: number; // DifficultProgrammingLanguage
    ecf?: number;
    ef?: number;
    constructor({
      e1,
      e2,
      e3,
      e4,
      e5,
      e6,
      e7,
      e8,
      ecf,
      ef
    }: IUseCasePointsECF) {
      this.e1 = e1;
      this.e2 = e2;
      this.e3 = e3;
      this.e4 = e4;
      this.e5 = e5;
      this.e6 = e6;
      this.e7 = e7;
      this.e8 = e8;
      this.ecf = ecf;
      this.ef = ef
    }
  }
  