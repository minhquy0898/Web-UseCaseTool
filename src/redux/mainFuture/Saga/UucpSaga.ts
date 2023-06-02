import { call, put } from "redux-saga/effects";
import {
  CaculateEcf,
  CaculateTCF,
  CaculateUAW,
  CaculateUUCW,
} from "../../../utils/utils";
import { IUseCasePointsECF, UseCasePointsECF } from "../model/UseCasePointsECF";
import {
  _useCasePointEcfSuccess,
  _useCasePointTcfSuccess,
  _useCasePointUawSuccess,
  _useCasePointUucpSuccess,
} from "../action";
import { IUseCasePointsTCF } from "../model/UseCasePointsTCF";
import { Console } from "console";
import { IUseCasePointsUAW } from "../model/UseCasePointsUAW";

export function* UucpSaga(action: {
  type: string;
  payload: IUseCasePointsUAW;
}): Generator<any, any, any> {
  const { average, complex, simple } = action.payload;
  console.log(action);
  const res = yield call(CaculateUUCW, {
    average: average,
    complex: complex,
    simple: simple,
  });
  console.log(res);

  yield put(
    _useCasePointUucpSuccess({
      uucp: {
        uucp: res.totalUucp,
        average: res.Result.ResultAverage,
        complex: res.Result.ResultComplex,
        simple: res.Result.ResultSimple,
      },
    })
  );
}
