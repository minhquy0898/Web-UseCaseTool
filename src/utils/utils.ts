import { IUseCasePointsECF } from "../redux/mainFuture/model/UseCasePointsECF";
import { IUseCasePointsTCF } from "../redux/mainFuture/model/UseCasePointsTCF";
import { IUseCasePointsUAW } from "../redux/mainFuture/model/UseCasePointsUAW";
import { IUseCasePointsUUCP } from "../redux/mainFuture/model/UseCasePointsUUCP";

export const scrollTop = () => {
  return window.scrollTo(0, 0);
};

export const CaculateUUCW = ({
  simple,
  average,
  complex,
}: IUseCasePointsUUCP) => {
  const Weights = {
    simple: 5,
    average: 10,
    Complex: 15,
  };
  const totalUucp = () => {
    return simple * Weights.simple +
      average * Weights.average +
      complex * Weights.Complex;
  };
  return {
    Result: {
      ResultSimple: simple * Weights.simple,
      ResultAverage: simple * Weights.average,
      ResultComplex: complex * Weights.Complex,
    },
    totalUucp: totalUucp(),
  };
};

export const CaculateUAW = ({
  simple,
  average,
  complex,
}: IUseCasePointsUAW) => {
  const Weights = {
    simple: 1,
    average: 2,
    Complex: 3,
  };
  const totalUaw = () => {
    return simple * Weights.simple +
      average * Weights.average +
      complex * Weights.Complex;
  };
  return {
    Result: {
      ResultSimple: simple * Weights.simple,
      ResultAverage: simple * Weights.average,
      ResultComplex: complex * Weights.Complex,
    },
    totalUaw: totalUaw(),
  };
};

export const CaculateTCF =async ({
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
  }: IUseCasePointsTCF) => {
    const Weights = {
      t1: 2.0,
      t2: 1.0,
      t3: 1.0,
      t4: 1.0,
      t5: 1.0,
      t6: 0.5,
      t7: 0.5,
      t8: 2.0,
      t9: 1.0,
      t10: 1.0,
      t11: 1.0,
      t12: 1.0,
      t13: 1.0,
    };
    
    const tf = ()=>{
        return (t1 * Weights.t1) + (t2 * Weights.t2) + (t3 * Weights.t3) + (t4 * Weights.t4) +
        (t5 * Weights.t5) + (t6 * Weights.t6) + (t7 * Weights.t7) + (t8 * Weights.t8) +
        (t9 * Weights.t9) + (t10 * Weights.t10) + (t11 * Weights.t11) + (t12 * Weights.t12) +
        (t13 * Weights.t13);
    }
    const totalTcf = () => {
      return 0.6 +(tf()/100) ;
    };
    // Trả về giá trị totalTcf
    return await {
        result :{
            t1: t1 * Weights.t1,
            t2: t2 * Weights.t2,
            t3: t3 * Weights.t3,
            t4: t4 * Weights.t4,
            t5: t5 * Weights.t5,
            t6: t6 * Weights.t6,
            t7: t7 * Weights.t7,
            t8: t8 * Weights.t8,
            t9: t9 * Weights.t9,
            t10: t10 * Weights.t10,
            t11: t11 * Weights.t11,
            t12: t12 * Weights.t12,
            t13: t13 * Weights.t13,
        },
        totalTcf:totalTcf(),
        tf:tf(),
    };
    
  };
  
  export const CaculateEcf =async ({
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
  }: IUseCasePointsECF) => {
    const Weights = {
      e1: 1.5,
      e2: 0.5,
      e3: 1.0,
      e4: 0.5,
      e5: 1.0,
      e6: 2.0,
      e7: -1.0,
      e8: -1.0,
    };
    const ef =  ()=>{
        return (e1 * Weights.e1) + (e2 * Weights.e2) + (e3 * Weights.e3) + (e4 * Weights.e4) +
        (e5 * Weights.e5) + (e6 * Weights.e6) + (e7 * Weights.e7) + (e8 * Weights.e8);
    }
    const totalEcf = () => {
      return  1.4 + (-0.03 * ef());
    };
  
    const result = {
      e1: e1 * Weights.e1,
      e2: e2 * Weights.e2,
      e3: e3 * Weights.e3,
      e4: e4 * Weights.e4,
      e5: e5 * Weights.e5,
      e6: e6 * Weights.e6,
      e7: e7 * Weights.e7,
      e8: e8 * Weights.e8,
    };
    console.log("-------jjjj",{
      result,
      totalEcf: totalEcf(),
      ef:ef()
    })
    return await {
      result,
      totalEcf: totalEcf(),
      ef:ef()
    };
  };



  