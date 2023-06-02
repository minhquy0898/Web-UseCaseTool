import { CreateUserWithEmailAndPassword, SignInWithEmailAndPassword } from "../../../../api/authencation/auth";
import { _signInError, _signInPenning, _signInSuccess, signIn } from "../action";
import { all, call, put } from 'redux-saga/effects';

export function* signInSaga(action: { type: string, payload: signIn }): Generator<any, any, any> {
    try {
        console.log("action", action)
        // get user
        const { email, password } = action.payload
        const CurentUser = yield call(SignInWithEmailAndPassword, email, password);
        yield put(_signInSuccess({
            uid: CurentUser.user.uid,
            displayName: CurentUser.user.displayName,
            email: CurentUser.user.email,
            photoUrl: CurentUser.user.photoURL,
            emailVerified:CurentUser.user.emailVerified,
        }))
        
    } catch (error) {
        yield put(_signInError(error))
    }
}
