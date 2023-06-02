import { takeEvery } from "redux-saga/effects";
import { _useCasePointEcfFectch, _useCasePointTcfFectch, _useCasePointUawFectch, _useCasePointUucpFectch } from "../action";
import { EcfSaga } from "./EcfSaga";
import { TcfSaga } from "./TcfSaga";
import { UawSaga } from "./UawSaga";
import { UucpSaga } from "./UucpSaga";

export function* rootUseCasePointSaga():any {
    
    // yield takeEvery(_signIn.type, signInSaga);
    // yield takeEvery(_signUp.type,SignUpSaga);
    // yield takeEvery(_signOut.type,SignOut);
      yield takeEvery(_useCasePointEcfFectch.type,EcfSaga);
      yield takeEvery(_useCasePointTcfFectch.type,TcfSaga);
      yield takeEvery(_useCasePointUawFectch.type,UawSaga);
      yield takeEvery(_useCasePointUucpFectch.type,UucpSaga);
}
