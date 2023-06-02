import { call } from "redux-saga/effects";
import { SignOut } from "../../../../api/authencation/auth";


export function* SignOutSaga(): Generator<any, any, any>{
    try {
        const curUser =yield call(SignOut)    
    } catch (error) {
        console.log(error)
    }
    
}