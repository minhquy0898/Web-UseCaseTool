
 export interface IUseCasePointsTCF{
    t1: number; // DistributedSystem
    t2: number; // ResponseTime/PerformanceObjectives
    t3: number; // End-UserEfficiency
    t4: number; // InternalProcessingComplexity
    t5: number; // CodeReusability
    t6: number; // EasyToInstall
    t7: number; // EasyToUser
    t8: number; // PortabilityToOtherPlatforms
    t9: number; // SystemMaintenance
    t10: number; // Concurrent/parallelProcessing
    t11: number; // SecurityFeatures
    t12: number; // AccessForThirdParties
    t13: number; // EndUserTraining
    tcf?: number;
    tf?:number;
  }

export class UseCasePointsTCF implements IUseCasePointsTCF {
    t1: number; // DistributedSystem
    t2: number; // ResponseTime/PerformanceObjectives
    t3: number; // End-UserEfficiency
    t4: number; // InternalProcessingComplexity
    t5: number; // CodeReusability
    t6: number; // EasyToInstall
    t7: number; // EasyToUser
    t8: number; // PortabilityToOtherPlatforms
    t9: number; // SystemMaintenance
    t10: number; // Concurrent/parallelProcessing
    t11: number; // SecurityFeatures
    t12: number; // AccessForThirdParties
    t13: number; // EndUserTraining
    tcf?: number;
    tf?:number;
  
    constructor({
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      t10,
      t11,
      t12,
      t13,
      tcf,
      tf,
    }: {
      t1: number;
      t2: number;
      t3: number;
      t4: number;
      t5: number;
      t6: number;
      t7: number;
      t8: number;
      t9: number;
      t10: number;
      t11: number;
      t12: number;
      t13: number;
      tcf: number;
      tf?:number;
    }) {
      this.t1 = t1;
      this.t2 = t2;
      this.t3 = t3;
      this.t4 = t4;
      this.t5 = t5;
      this.t6 = t6;
      this.t7 = t7;
      this.t8 = t8;
      this.t9 = t9;
      this.t10 = t10;
      this.t11 = t11;
      this.t12 = t12;
      this.t13 = t13;
      this.tcf = tcf;
      this.tf = tf;
    }
  }
  