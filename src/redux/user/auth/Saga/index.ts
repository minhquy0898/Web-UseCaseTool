import { _signIn, _signOut, _signUp } from "../action";
import { signInSaga } from "./SignIn";
import { takeEvery,takeLatest, actionChannel } from 'redux-saga/effects';
import { SignUpSaga } from "./SignUp";
import { SignOut } from "../../../../api/authencation/auth";
import { SignOutSaga } from "./SignOut";

export function* rootAuthSaga():any {
    yield takeEvery(_signIn.type, signInSaga);
    yield takeEvery(_signUp.type,SignUpSaga);
    yield takeEvery(_signOut.type,SignOutSaga);
}

