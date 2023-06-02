import { call, put } from "redux-saga/effects";
import { CaculateEcf, CaculateTCF, CaculateUAW } from "../../../utils/utils";
import { IUseCasePointsECF, UseCasePointsECF } from "../model/UseCasePointsECF";
import { _useCasePointEcfSuccess, _useCasePointTcfSuccess, _useCasePointUawSuccess } from "../action";
import { IUseCasePointsTCF } from "../model/UseCasePointsTCF";
import { Console } from "console";
import { IUseCasePointsUAW } from "../model/UseCasePointsUAW";

export function* UawSaga(action: { type: string; payload: IUseCasePointsUAW })
: Generator<any, any, any> {
  const {average,complex,simple } = action.payload;
  console.log(action);
  const res = yield call(CaculateUAW,{
    average: average,
    complex: complex,
    simple: simple
  })

  yield put(_useCasePointUawSuccess({
    uaw:{
        uaw:res.totalUaw,
        average:res.Result.ResultSimple,
        complex:res.Result.ResultSimple,
        simple:res.Result.ResultComplex
    }

  }))
  console.log("+++++++++",res);

  
  
  

  
  

}
