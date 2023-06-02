import { call, put } from "redux-saga/effects";
import { CaculateEcf } from "../../../utils/utils";
import { IUseCasePointsECF, UseCasePointsECF } from "../model/UseCasePointsECF";
import { _useCasePointEcfSuccess } from "../action";

export function* EcfSaga(action: {
  type: string;
  payload: IUseCasePointsECF;
}): Generator<any, any, any> {
  const { e1, e2, e3, e4, e5, e6, e7, e8 } = action.payload;
  console.log(action);
  const Value = {
    e1: e1,
    e2: e2,
    e3: e3,
    e4: e4,
    e5: e5,
    e6: e6,
    e7: e7,
    e8: e8,
  };
  console.log(Value);

  const res = yield call(CaculateEcf, Value);
  const curEcf = {
    ...res.result,
    ecf: res.totalEcf,
    ef: res.ef,
  };
  console.log("s",curEcf);
  
  yield put(
    _useCasePointEcfSuccess({
      ecf: curEcf,
    })
  );
}
