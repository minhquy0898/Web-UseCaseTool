
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
AUTH_SIGN_IN_SUCCESS,
AUTH_SIGN_IN_PENNING,
AUTH_SIGN_IN_ERROR,
AUTH_SIGN_IN_FETCH,
AUTH_SIGN_OUT,
AUTH_SIGN_UP_ERROR,
AUTH_SIGN_UP_PENNING,
AUTH_SIGN_UP_SUCCESS,
AUTH_SIGN_UP_FETCH,
} from './constants'

export interface initUser {
    auth:{
        uid:string|null;
        displayName: string | null;
        email: string | null;
        photoUrl: string | null;
        emailVerified?: string | null;
    }
    loading: boolean;
    error: any;
    isLogin: boolean;
}

export const initState: initUser = {
    auth:{
        uid:null,
        displayName: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
    },
    loading: false,
    error: null,
    isLogin:false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        AUTH_SIGN_IN_SUCCESS:(state,action)=>{
            
            state.loading=false;
            state.error = null;
            state.isLogin = true;
            state.auth = action.payload
            console.log(state.isLogin)
        },
        AUTH_SIGN_IN_PENNING:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_IN_FETCH:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_IN_ERROR:(state,action)=>{
            state.loading=false;
            state.isLogin = false;
            state.error = action.payload;
        },
        AUTH_SIGN_OUT:(state,action)=>{
            state.loading=false;
            state.error = null;
            state.isLogin = false;
            state.auth = {
                uid:null,
                displayName: null,
                email: null,
                photoUrl: null,
                emailVerified: null,
            }
        },
        AUTH_SIGN_UP_FETCH:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_UP_PENNING:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_UP_SUCCESS:(state,action)=>{
            state.loading = false;
            state.error = null;
        },
        AUTH_SIGN_UP_ERROR:(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        }
    },
    

});

export default authSlice

