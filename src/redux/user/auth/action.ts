import authSlice from './reducer';
import { createAction } from '@reduxjs/toolkit';

export interface signIn {
    email: string, 
    password: string
}

export interface signUp {
    FullName:string,
    Email: string, 
    password: string,
    confirmPassword?:string
}

export interface signInSuccess{
    uid:string,
    displayName: string|null;
    email: string | null;
    photoUrl: string | null;
    emailVerified?: boolean | null;
}
//----------------------Sign IN
export const _signIn = createAction(authSlice.actions.AUTH_SIGN_IN_FETCH.type, (payload: signIn) => {
    return {
        payload
    };
});

export const _signInPenning = createAction(authSlice.actions.AUTH_SIGN_IN_PENNING.type);

export const _signInSuccess = createAction(authSlice.actions.AUTH_SIGN_IN_SUCCESS.type, (payload: signInSuccess) => {
    return {
        payload
    };
});

export const _signInError = createAction(authSlice.actions.AUTH_SIGN_IN_ERROR.type, (payload: any) => {
    return {
        payload
    };
});


//----------------------SIGN UP
export const _signUp = createAction(authSlice.actions.AUTH_SIGN_UP_FETCH.type,(payload:signUp)=>{
    return {
        payload
    }
});

export const _signUpPenning = createAction(authSlice.actions.AUTH_SIGN_UP_PENNING.type);

export const _signUpSuccess = createAction(authSlice.actions.AUTH_SIGN_IN_SUCCESS.type,(payload:signUp)=>{
    return {
        payload
    }
})

export const _signUpError = createAction(authSlice.actions.AUTH_SIGN_UP_ERROR.type, (payload: any) => {
    return {
        payload
    };
});
//----------------------SIGN OUT

export const _signOut = createAction(authSlice.actions.AUTH_SIGN_OUT.type)



