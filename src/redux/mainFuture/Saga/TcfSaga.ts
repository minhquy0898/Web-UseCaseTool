import { call, put } from "redux-saga/effects";
import { CaculateEcf, CaculateTCF } from "../../../utils/utils";
import { IUseCasePointsECF, UseCasePointsECF } from "../model/UseCasePointsECF";
import { _useCasePointEcfSuccess, _useCasePointTcfSuccess } from "../action";
import { IUseCasePointsTCF } from "../model/UseCasePointsTCF";
import { Console } from "console";

export function* TcfSaga(action: { type: string; payload: IUseCasePointsTCF })
: Generator<any, any, any> {
  const { t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11, t12,t13 } = action.payload;
  console.log(action);
  const Value = {
    t1: t1,
    t2: t2,
    t3: t3,
    t4: t4,
    t5: t5,
    t6: t6,
    t7: t7,
    t8: t8,
    t9: t9,
    t10: t10,
    t11: t11,
    t12: t12,
    t13: t13
  };

  const res = yield call(CaculateTCF,Value);

  yield put(_useCasePointTcfSuccess({
    tcf:{
        ...res.result,
        tf:res.tf,
        tcf:res.totalTcf
    }
  }))
  console.log("-------",res);
  
  

  
  

}
