import { call, put } from "redux-saga/effects";
import { CreateUserWithEmailAndPassword } from "../../../../api/authencation/auth";
import {
  _signUpError,
  _signUpPenning,
  _signUpSuccess,
  signUp,
} from "../action";
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import { addUser } from "../../../../api/database/auth";

export function* SignUpSaga(action: {
  type: string;
  payload: signUp;
}): Generator<any, any, any> {
  try {
    put(_signUpPenning());
    const { Email, password, FullName } = action.payload;
    console.log(action.payload);
    const CurentUser = yield call(
      CreateUserWithEmailAndPassword,
      Email,
      password
    );
    const refCollection = yield call(addUser,{
        DisplayName:FullName,
        Email:Email,
        FullName:FullName,
        PhoneNumber:"",
        PhotoUrl:"https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/223707076/original/56c8ceb28a6e47c9ca11b2213c09cb7728461541.png?fbclid=IwAR1cEb9jOfdueX7Ra9BY5qgNZganaXjKzwhDASvkXu2BahYOrbiXuywP6eg"
    } );
    // {
    //     FullName: FullName,
    //     PhoneNumber: null,
    //     DisplayName: FullName,
    //     Email: Email,
    //     PhotoUrl:
    //       "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/223707076/original/56c8ceb28a6e47c9ca11b2213c09cb7728461541.png?fbclid=IwAR1cEb9jOfdueX7Ra9BY5qgNZganaXjKzwhDASvkXu2BahYOrbiXuywP6eg",
    //   }
    console.log(CurentUser);
    // if (CurentUser.user) {
    //   yield put(
    //     _signUpSuccess({
    //       FullName: CurentUser.user.displayName,
    //       Email: CurentUser.user.email,
    //       password: password,
    //     })
    //   );
    // }
    
  } catch (error) {
    yield put(_signUpError(error));
  }
}
